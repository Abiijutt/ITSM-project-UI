
import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useUser } from '@/contexts/UserContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface Profile {
  username: string;
  avatar_url: string;
}

const UserAvatar = () => {
  const { user, signOut } = useUser();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('username, avatar_url')
          .eq('id', user.id)
          .single();

        if (error) {
          throw error;
        }

        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: 'Signed out successfully',
      });
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!user) {
    return (
      <Button onClick={() => navigate('/auth')}>Sign In</Button>
    );
  }

  if (loading) {
    return (
      <Avatar>
        <AvatarFallback>...</AvatarFallback>
      </Avatar>
    );
  }

  const initials = profile?.username?.substring(0, 2).toUpperCase() || user.email?.substring(0, 2).toUpperCase() || '??';

  return (
    <div className="flex items-center gap-2">
      <Avatar className="cursor-pointer" onClick={handleSignOut}>
        <AvatarImage src={profile?.avatar_url} alt={profile?.username || 'User'} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default UserAvatar;
