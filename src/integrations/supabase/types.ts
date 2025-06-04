export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      blog_posts: {
        Row: {
          author_id: string
          category: string | null
          content: string
          created_at: string
          excerpt: string | null
          featured_image_url: string | null
          id: string
          meta_description: string | null
          meta_title: string | null
          published_at: string | null
          slug: string
          status: string
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          author_id: string
          category?: string | null
          content: string
          created_at?: string
          excerpt?: string | null
          featured_image_url?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          slug: string
          status?: string
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string
          category?: string | null
          content?: string
          created_at?: string
          excerpt?: string | null
          featured_image_url?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          slug?: string
          status?: string
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      bookings: {
        Row: {
          admin_notes: string | null
          contact_email: string
          contact_phone: string | null
          created_at: string
          duration_minutes: number | null
          id: string
          meeting_link: string | null
          notes: string | null
          preferred_date: string
          preferred_time: string
          service_details: string | null
          service_type: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          admin_notes?: string | null
          contact_email: string
          contact_phone?: string | null
          created_at?: string
          duration_minutes?: number | null
          id?: string
          meeting_link?: string | null
          notes?: string | null
          preferred_date: string
          preferred_time: string
          service_details?: string | null
          service_type: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          admin_notes?: string | null
          contact_email?: string
          contact_phone?: string | null
          created_at?: string
          duration_minutes?: number | null
          id?: string
          meeting_link?: string | null
          notes?: string | null
          preferred_date?: string
          preferred_time?: string
          service_details?: string | null
          service_type?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      faqs: {
        Row: {
          answer: string
          category: string
          created_at: string
          id: string
          is_featured: boolean | null
          question: string
          sort_order: number | null
          updated_at: string
        }
        Insert: {
          answer: string
          category?: string
          created_at?: string
          id?: string
          is_featured?: boolean | null
          question: string
          sort_order?: number | null
          updated_at?: string
        }
        Update: {
          answer?: string
          category?: string
          created_at?: string
          id?: string
          is_featured?: boolean | null
          question?: string
          sort_order?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          action_url: string | null
          created_at: string
          id: string
          is_read: boolean | null
          message: string
          metadata: Json | null
          title: string
          type: string
          user_id: string
        }
        Insert: {
          action_url?: string | null
          created_at?: string
          id?: string
          is_read?: boolean | null
          message: string
          metadata?: Json | null
          title: string
          type?: string
          user_id: string
        }
        Update: {
          action_url?: string | null
          created_at?: string
          id?: string
          is_read?: boolean | null
          message?: string
          metadata?: Json | null
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      pricing_plans: {
        Row: {
          billing_period: string
          created_at: string
          currency: string
          description: string | null
          features: string[]
          id: string
          is_active: boolean | null
          is_popular: boolean | null
          max_projects: number | null
          max_users: number | null
          name: string
          price: number
          sort_order: number | null
          stripe_price_id: string | null
          updated_at: string
        }
        Insert: {
          billing_period?: string
          created_at?: string
          currency?: string
          description?: string | null
          features: string[]
          id?: string
          is_active?: boolean | null
          is_popular?: boolean | null
          max_projects?: number | null
          max_users?: number | null
          name: string
          price: number
          sort_order?: number | null
          stripe_price_id?: string | null
          updated_at?: string
        }
        Update: {
          billing_period?: string
          created_at?: string
          currency?: string
          description?: string | null
          features?: string[]
          id?: string
          is_active?: boolean | null
          is_popular?: boolean | null
          max_projects?: number | null
          max_users?: number | null
          name?: string
          price?: number
          sort_order?: number | null
          stripe_price_id?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          company: string | null
          created_at: string
          full_name: string | null
          id: string
          notification_preferences: Json | null
          phone: string | null
          subscription_plan: string | null
          subscription_status: string | null
          updated_at: string
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          company?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          notification_preferences?: Json | null
          phone?: string | null
          subscription_plan?: string | null
          subscription_status?: string | null
          updated_at?: string
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          company?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          notification_preferences?: Json | null
          phone?: string | null
          subscription_plan?: string | null
          subscription_status?: string | null
          updated_at?: string
          username?: string | null
          website?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          admin_notes: string | null
          budget: number | null
          client_feedback: string | null
          created_at: string
          deadline: string | null
          deliverables: string[] | null
          description: string | null
          files: Json | null
          id: string
          priority: string
          progress: number | null
          service_type: string
          status: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          admin_notes?: string | null
          budget?: number | null
          client_feedback?: string | null
          created_at?: string
          deadline?: string | null
          deliverables?: string[] | null
          description?: string | null
          files?: Json | null
          id?: string
          priority?: string
          progress?: number | null
          service_type: string
          status?: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          admin_notes?: string | null
          budget?: number | null
          client_feedback?: string | null
          created_at?: string
          deadline?: string | null
          deliverables?: string[] | null
          description?: string | null
          files?: Json | null
          id?: string
          priority?: string
          progress?: number | null
          service_type?: string
          status?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          avatar_url: string | null
          company: string | null
          content: string
          created_at: string
          featured: boolean | null
          id: string
          name: string
          position: string | null
          rating: number
          service_type: string | null
          status: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          company?: string | null
          content: string
          created_at?: string
          featured?: boolean | null
          id?: string
          name: string
          position?: string | null
          rating?: number
          service_type?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          company?: string | null
          content?: string
          created_at?: string
          featured?: boolean | null
          id?: string
          name?: string
          position?: string | null
          rating?: number
          service_type?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          granted_at: string
          granted_by: string | null
          id: string
          role: string
          user_id: string
        }
        Insert: {
          granted_at?: string
          granted_by?: string | null
          id?: string
          role?: string
          user_id: string
        }
        Update: {
          granted_at?: string
          granted_by?: string | null
          id?: string
          role?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: { _user_id: string; _role: string }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
