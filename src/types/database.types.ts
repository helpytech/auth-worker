export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      access_token: {
        Row: {
          access_token_id: string
          count: number
          created_at: string
          is_enable: boolean
          organization_id: string
        }
        Insert: {
          access_token_id: string
          count?: number
          created_at?: string
          is_enable?: boolean
          organization_id: string
        }
        Update: {
          access_token_id?: string
          count?: number
          created_at?: string
          is_enable?: boolean
          organization_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ticket_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organization"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      attachment: {
        Row: {
          attachment_id: number
          class_attachment: number
          created_at: string
          is_enable: boolean
          name_attachment: string
          source: string
        }
        Insert: {
          attachment_id?: number
          class_attachment: number
          created_at?: string
          is_enable?: boolean
          name_attachment: string
          source: string
        }
        Update: {
          attachment_id?: number
          class_attachment?: number
          created_at?: string
          is_enable?: boolean
          name_attachment?: string
          source?: string
        }
        Relationships: [
          {
            foreignKeyName: "attachment_class_attachment_fkey"
            columns: ["class_attachment"]
            isOneToOne: false
            referencedRelation: "class"
            referencedColumns: ["class_id"]
          },
        ]
      }
      attendance: {
        Row: {
          attendance_id: number
          class_attendance: number
          created_at: string
          organization_id: string
          user_permission_id: number
        }
        Insert: {
          attendance_id?: number
          class_attendance: number
          created_at?: string
          organization_id: string
          user_permission_id: number
        }
        Update: {
          attendance_id?: number
          class_attendance?: number
          created_at?: string
          organization_id?: string
          user_permission_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "attendance_class_attendance_fkey"
            columns: ["class_attendance"]
            isOneToOne: false
            referencedRelation: "class"
            referencedColumns: ["class_id"]
          },
          {
            foreignKeyName: "attendance_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organization"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "attendance_user_permission_id_fkey"
            columns: ["user_permission_id"]
            isOneToOne: false
            referencedRelation: "organization_permission"
            referencedColumns: ["permission_id"]
          },
        ]
      }
      class: {
        Row: {
          class_id: number
          created_at: string
          description_class: string | null
          duration_class: unknown
          is_enable: boolean
          order: number
          section_id: number
          slug: string
          source_video: string
          title_class: string
        }
        Insert: {
          class_id?: number
          created_at?: string
          description_class?: string | null
          duration_class?: unknown
          is_enable?: boolean
          order: number
          section_id: number
          slug: string
          source_video: string
          title_class: string
        }
        Update: {
          class_id?: number
          created_at?: string
          description_class?: string | null
          duration_class?: unknown
          is_enable?: boolean
          order?: number
          section_id?: number
          slug?: string
          source_video?: string
          title_class?: string
        }
        Relationships: [
          {
            foreignKeyName: "class_theme_id_fkey"
            columns: ["section_id"]
            isOneToOne: false
            referencedRelation: "section"
            referencedColumns: ["section_id"]
          },
        ]
      }
      course: {
        Row: {
          competencias: string | null
          course_id: number
          created_at: string
          description_course: string
          duration_course: unknown
          image_course: string
          is_enable: boolean
          metas: string | null
          name_professor: string
          objetivos: string | null
          professor_id: number
          slug: string
          tags_course: string[] | null
          title_course: string
          type: Database["public"]["Enums"]["categories-course"]
        }
        Insert: {
          competencias?: string | null
          course_id?: number
          created_at?: string
          description_course: string
          duration_course?: unknown
          image_course: string
          is_enable?: boolean
          metas?: string | null
          name_professor: string
          objetivos?: string | null
          professor_id: number
          slug: string
          tags_course?: string[] | null
          title_course: string
          type?: Database["public"]["Enums"]["categories-course"]
        }
        Update: {
          competencias?: string | null
          course_id?: number
          created_at?: string
          description_course?: string
          duration_course?: unknown
          image_course?: string
          is_enable?: boolean
          metas?: string | null
          name_professor?: string
          objetivos?: string | null
          professor_id?: number
          slug?: string
          tags_course?: string[] | null
          title_course?: string
          type?: Database["public"]["Enums"]["categories-course"]
        }
        Relationships: [
          {
            foreignKeyName: "course_professor_id_fkey"
            columns: ["professor_id"]
            isOneToOne: false
            referencedRelation: "professor"
            referencedColumns: ["professor_id"]
          },
        ]
      }
      log: {
        Row: {
          class_log: number
          created_at: string
          last_interval: unknown | null
          log_id: number
          organization_id: string
          user_permission_id: number | null
        }
        Insert: {
          class_log: number
          created_at?: string
          last_interval?: unknown | null
          log_id?: number
          organization_id: string
          user_permission_id?: number | null
        }
        Update: {
          class_log?: number
          created_at?: string
          last_interval?: unknown | null
          log_id?: number
          organization_id?: string
          user_permission_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "log_class_log_fkey"
            columns: ["class_log"]
            isOneToOne: false
            referencedRelation: "class"
            referencedColumns: ["class_id"]
          },
          {
            foreignKeyName: "log_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organization"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "log_user_permission_id_fkey"
            columns: ["user_permission_id"]
            isOneToOne: false
            referencedRelation: "organization_permission"
            referencedColumns: ["permission_id"]
          },
        ]
      }
      organization: {
        Row: {
          created_at: string
          is_active: boolean
          logo_organization: string | null
          name_organization: string
          organization_id: string
        }
        Insert: {
          created_at?: string
          is_active?: boolean
          logo_organization?: string | null
          name_organization: string
          organization_id: string
        }
        Update: {
          created_at?: string
          is_active?: boolean
          logo_organization?: string | null
          name_organization?: string
          organization_id?: string
        }
        Relationships: []
      }
      organization_permission: {
        Row: {
          created_at: string
          organization_id: string
          permission_id: number
          registered_ticket: string | null
          role_user: Database["public"]["Enums"]["role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          organization_id: string
          permission_id?: number
          registered_ticket?: string | null
          role_user: Database["public"]["Enums"]["role"]
          user_id: string
        }
        Update: {
          created_at?: string
          organization_id?: string
          permission_id?: number
          registered_ticket?: string | null
          role_user?: Database["public"]["Enums"]["role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_permission_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organization"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "organization_permission_registered_ticket_fkey"
            columns: ["registered_ticket"]
            isOneToOne: false
            referencedRelation: "access_token"
            referencedColumns: ["access_token_id"]
          },
          {
            foreignKeyName: "organization_permission_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["user_id"]
          },
        ]
      }
      professor: {
        Row: {
          description: string | null
          education_background: Json
          first_name: string
          last_name: string
          professional_experience: Json
          professor_id: number
          profile_picture: string
          slug: string | null
          social_media: string | null
        }
        Insert: {
          description?: string | null
          education_background: Json
          first_name: string
          last_name: string
          professional_experience: Json
          professor_id?: number
          profile_picture: string
          slug?: string | null
          social_media?: string | null
        }
        Update: {
          description?: string | null
          education_background?: Json
          first_name?: string
          last_name?: string
          professional_experience?: Json
          professor_id?: number
          profile_picture?: string
          slug?: string | null
          social_media?: string | null
        }
        Relationships: []
      }
      section: {
        Row: {
          course_id: number
          created_at: string
          order: number
          section_id: number
          title: string
        }
        Insert: {
          course_id: number
          created_at?: string
          order: number
          section_id?: number
          title: string
        }
        Update: {
          course_id?: number
          created_at?: string
          order?: number
          section_id?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "theme_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "course"
            referencedColumns: ["course_id"]
          },
        ]
      }
      user: {
        Row: {
          email: string
          first_name: string
          last_name: string
          profile_picture: string | null
          user_id: string
        }
        Insert: {
          email: string
          first_name: string
          last_name: string
          profile_picture?: string | null
          user_id: string
        }
        Update: {
          email?: string
          first_name?: string
          last_name?: string
          profile_picture?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      "categories-course": "course" | "capsule"
      role: "admin_organization" | "user" | "superAdmin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      "categories-course": ["course", "capsule"],
      role: ["admin_organization", "user", "superAdmin"],
    },
  },
} as const
