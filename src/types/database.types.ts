export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
	// Allows to automatically instantiate createClient with right options
	// instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
	__InternalSupabase: {
		PostgrestVersion: '12.2.3 (519615d)';
	};
	public: {
		Tables: {
			access_token: {
				Row: {
					access_token_id: string;
					count: number;
					created_at: string;
					is_enable: boolean;
					organization_id: string;
				};
				Insert: {
					access_token_id: string;
					count?: number;
					created_at?: string;
					is_enable?: boolean;
					organization_id: string;
				};
				Update: {
					access_token_id?: string;
					count?: number;
					created_at?: string;
					is_enable?: boolean;
					organization_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'ticket_organization_id_fkey';
						columns: ['organization_id'];
						isOneToOne: false;
						referencedRelation: 'organization';
						referencedColumns: ['organization_id'];
					}
				];
			};
			attachment: {
				Row: {
					attachment_id: number;
					class_attachment: number;
					created_at: string;
					is_enable: boolean;
					name_attachment: string;
					source: string;
				};
				Insert: {
					attachment_id?: number;
					class_attachment: number;
					created_at?: string;
					is_enable?: boolean;
					name_attachment: string;
					source: string;
				};
				Update: {
					attachment_id?: number;
					class_attachment?: number;
					created_at?: string;
					is_enable?: boolean;
					name_attachment?: string;
					source?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'attachment_class_attachment_fkey';
						columns: ['class_attachment'];
						isOneToOne: false;
						referencedRelation: 'class';
						referencedColumns: ['class_id'];
					}
				];
			};
			attendance: {
				Row: {
					attendance_id: number;
					class_attendance: number;
					created_at: string;
					organization_id: string;
					user_permission_id: number;
				};
				Insert: {
					attendance_id?: number;
					class_attendance: number;
					created_at?: string;
					organization_id: string;
					user_permission_id: number;
				};
				Update: {
					attendance_id?: number;
					class_attendance?: number;
					created_at?: string;
					organization_id?: string;
					user_permission_id?: number;
				};
				Relationships: [
					{
						foreignKeyName: 'attendance_class_attendance_fkey';
						columns: ['class_attendance'];
						isOneToOne: false;
						referencedRelation: 'class';
						referencedColumns: ['class_id'];
					},
					{
						foreignKeyName: 'attendance_organization_id_fkey';
						columns: ['organization_id'];
						isOneToOne: false;
						referencedRelation: 'organization';
						referencedColumns: ['organization_id'];
					},
					{
						foreignKeyName: 'attendance_user_permission_id_fkey';
						columns: ['user_permission_id'];
						isOneToOne: false;
						referencedRelation: 'organization_permission';
						referencedColumns: ['permission_id'];
					}
				];
			};
			category: {
				Row: {
					banner_course: string;
					category_id: number;
					color: string;
					created_at: string;
					description_image: string;
					large_banner: string;
					name_category: string;
					slug: string;
					small_preview: string;
				};
				Insert: {
					banner_course?: string;
					category_id?: number;
					color?: string;
					created_at?: string;
					description_image?: string;
					large_banner?: string;
					name_category: string;
					slug: string;
					small_preview?: string;
				};
				Update: {
					banner_course?: string;
					category_id?: number;
					color?: string;
					created_at?: string;
					description_image?: string;
					large_banner?: string;
					name_category?: string;
					slug?: string;
					small_preview?: string;
				};
				Relationships: [];
			};
			class: {
				Row: {
					class_id: number;
					created_at: string;
					description_class: string | null;
					duration_class: unknown;
					is_enable: boolean;
					order: number;
					section_id: number;
					slug: string;
					source_video: string;
					title_class: string;
				};
				Insert: {
					class_id?: number;
					created_at?: string;
					description_class?: string | null;
					duration_class?: unknown;
					is_enable?: boolean;
					order: number;
					section_id: number;
					slug: string;
					source_video: string;
					title_class: string;
				};
				Update: {
					class_id?: number;
					created_at?: string;
					description_class?: string | null;
					duration_class?: unknown;
					is_enable?: boolean;
					order?: number;
					section_id?: number;
					slug?: string;
					source_video?: string;
					title_class?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'class_theme_id_fkey';
						columns: ['section_id'];
						isOneToOne: false;
						referencedRelation: 'section';
						referencedColumns: ['section_id'];
					}
				];
			};
			course: {
				Row: {
					after_this_course: string | null;
					bonus: string | null;
					category_id: number;
					course_id: number;
					created_at: string;
					description_course: string;
					duration_course: unknown;
					external_url: string | null;
					image_course: string;
					is_enable: boolean;
					name_category: string;
					name_professor: string;
					professor_id: number;
					slug: string;
					tags_course: string[] | null;
					this_course_is_for_you: string | null;
					title_course: string;
				};
				Insert: {
					after_this_course?: string | null;
					bonus?: string | null;
					category_id?: number;
					course_id?: number;
					created_at?: string;
					description_course: string;
					duration_course?: unknown;
					external_url?: string | null;
					image_course: string;
					is_enable?: boolean;
					name_category?: string;
					name_professor: string;
					professor_id: number;
					slug: string;
					tags_course?: string[] | null;
					this_course_is_for_you?: string | null;
					title_course: string;
				};
				Update: {
					after_this_course?: string | null;
					bonus?: string | null;
					category_id?: number;
					course_id?: number;
					created_at?: string;
					description_course?: string;
					duration_course?: unknown;
					external_url?: string | null;
					image_course?: string;
					is_enable?: boolean;
					name_category?: string;
					name_professor?: string;
					professor_id?: number;
					slug?: string;
					tags_course?: string[] | null;
					this_course_is_for_you?: string | null;
					title_course?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'course_category_id_fkey';
						columns: ['category_id'];
						isOneToOne: false;
						referencedRelation: 'category';
						referencedColumns: ['category_id'];
					},
					{
						foreignKeyName: 'course_professor_id_fkey';
						columns: ['professor_id'];
						isOneToOne: false;
						referencedRelation: 'professor';
						referencedColumns: ['professor_id'];
					}
				];
			};
			knowledge_capsule: {
				Row: {
					capsule_id: number;
					category_id: number | null;
					created_at: string;
					description: string;
					external_url: string;
					image_capsule: string;
					is_enable: boolean;
					name_category: string | null;
					name_professor: string | null;
					professor_id: number | null;
					slug: string;
					tags: string[] | null;
					title: string;
				};
				Insert: {
					capsule_id?: number;
					category_id?: number | null;
					created_at?: string;
					description: string;
					external_url: string;
					image_capsule: string;
					is_enable?: boolean;
					name_category?: string | null;
					name_professor?: string | null;
					professor_id?: number | null;
					slug: string;
					tags?: string[] | null;
					title: string;
				};
				Update: {
					capsule_id?: number;
					category_id?: number | null;
					created_at?: string;
					description?: string;
					external_url?: string;
					image_capsule?: string;
					is_enable?: boolean;
					name_category?: string | null;
					name_professor?: string | null;
					professor_id?: number | null;
					slug?: string;
					tags?: string[] | null;
					title?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'knowledge_capsule_category_id_fkey';
						columns: ['category_id'];
						isOneToOne: false;
						referencedRelation: 'category';
						referencedColumns: ['category_id'];
					},
					{
						foreignKeyName: 'knowledge_capsule_id_professor_fkey';
						columns: ['professor_id'];
						isOneToOne: false;
						referencedRelation: 'professor';
						referencedColumns: ['professor_id'];
					}
				];
			};
			log_category: {
				Row: {
					category_id: number;
					created_at: string;
					id: number;
					name_benefactor: string;
					organization_id: string;
					user_id: string;
				};
				Insert: {
					category_id: number;
					created_at?: string;
					id?: number;
					name_benefactor: string;
					organization_id: string;
					user_id: string;
				};
				Update: {
					category_id?: number;
					created_at?: string;
					id?: number;
					name_benefactor?: string;
					organization_id?: string;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'log_category_category_id_fkey';
						columns: ['category_id'];
						isOneToOne: false;
						referencedRelation: 'category';
						referencedColumns: ['category_id'];
					},
					{
						foreignKeyName: 'log_category_organization_id_fkey';
						columns: ['organization_id'];
						isOneToOne: false;
						referencedRelation: 'organization';
						referencedColumns: ['organization_id'];
					},
					{
						foreignKeyName: 'log_category_user_id_fkey';
						columns: ['user_id'];
						isOneToOne: false;
						referencedRelation: 'user';
						referencedColumns: ['user_id'];
					}
				];
			};
			log_classes: {
				Row: {
					class_id: number;
					created_at: string;
					log_id: number;
					name_benefactor: string;
					organization_id: string;
					user_id: string;
				};
				Insert: {
					class_id: number;
					created_at?: string;
					log_id?: number;
					name_benefactor: string;
					organization_id: string;
					user_id: string;
				};
				Update: {
					class_id?: number;
					created_at?: string;
					log_id?: number;
					name_benefactor?: string;
					organization_id?: string;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'log_classes_class_id_fkey';
						columns: ['class_id'];
						isOneToOne: false;
						referencedRelation: 'class';
						referencedColumns: ['class_id'];
					},
					{
						foreignKeyName: 'log_classes_user_id_fkey';
						columns: ['user_id'];
						isOneToOne: false;
						referencedRelation: 'user';
						referencedColumns: ['user_id'];
					},
					{
						foreignKeyName: 'log_organization_id_fkey';
						columns: ['organization_id'];
						isOneToOne: false;
						referencedRelation: 'organization';
						referencedColumns: ['organization_id'];
					}
				];
			};
			log_courses: {
				Row: {
					course_id: number;
					created_at: string;
					log_id: number;
					name_benefactor: string;
					organization_id: string;
					user_id: string;
				};
				Insert: {
					course_id: number;
					created_at?: string;
					log_id?: number;
					name_benefactor: string;
					organization_id: string;
					user_id: string;
				};
				Update: {
					course_id?: number;
					created_at?: string;
					log_id?: number;
					name_benefactor?: string;
					organization_id?: string;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'log_courses_course_id_fkey';
						columns: ['course_id'];
						isOneToOne: false;
						referencedRelation: 'course';
						referencedColumns: ['course_id'];
					},
					{
						foreignKeyName: 'log_courses_organization_id_fkey';
						columns: ['organization_id'];
						isOneToOne: false;
						referencedRelation: 'organization';
						referencedColumns: ['organization_id'];
					},
					{
						foreignKeyName: 'log_courses_user_id_fkey';
						columns: ['user_id'];
						isOneToOne: false;
						referencedRelation: 'user';
						referencedColumns: ['user_id'];
					}
				];
			};
			log_knowledge_capsule: {
				Row: {
					capsule_id: number;
					created_at: string;
					log_id: number;
					name_benefactor: string;
					organization_id: string;
					user_id: string;
				};
				Insert: {
					capsule_id: number;
					created_at?: string;
					log_id?: number;
					name_benefactor: string;
					organization_id: string;
					user_id: string;
				};
				Update: {
					capsule_id?: number;
					created_at?: string;
					log_id?: number;
					name_benefactor?: string;
					organization_id?: string;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'log_knowledge_capsule_capsule_id_fkey';
						columns: ['capsule_id'];
						isOneToOne: false;
						referencedRelation: 'knowledge_capsule';
						referencedColumns: ['capsule_id'];
					},
					{
						foreignKeyName: 'log_knowledge_capsule_organization_id_fkey';
						columns: ['organization_id'];
						isOneToOne: false;
						referencedRelation: 'organization';
						referencedColumns: ['organization_id'];
					},
					{
						foreignKeyName: 'log_knowledge_capsule_user_id_fkey';
						columns: ['user_id'];
						isOneToOne: false;
						referencedRelation: 'user';
						referencedColumns: ['user_id'];
					}
				];
			};
			onboarding_benefactor: {
				Row: {
					created_at: string;
					id: number;
					step1: string[] | null;
					step2: string[] | null;
					step3: string[] | null;
					step4: string[] | null;
					step5: string[] | null;
					step6: string[] | null;
					step7: string | null;
					user_id: string;
				};
				Insert: {
					created_at?: string;
					id?: number;
					step1?: string[] | null;
					step2?: string[] | null;
					step3?: string[] | null;
					step4?: string[] | null;
					step5?: string[] | null;
					step6?: string[] | null;
					step7?: string | null;
					user_id: string;
				};
				Update: {
					created_at?: string;
					id?: number;
					step1?: string[] | null;
					step2?: string[] | null;
					step3?: string[] | null;
					step4?: string[] | null;
					step5?: string[] | null;
					step6?: string[] | null;
					step7?: string | null;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'onboarding_benefactor_user_id_fkey';
						columns: ['user_id'];
						isOneToOne: true;
						referencedRelation: 'user';
						referencedColumns: ['user_id'];
					}
				];
			};
			organization: {
				Row: {
					created_at: string;
					is_active: boolean;
					logo_organization: string | null;
					name_organization: string;
					organization_id: string;
				};
				Insert: {
					created_at?: string;
					is_active?: boolean;
					logo_organization?: string | null;
					name_organization: string;
					organization_id: string;
				};
				Update: {
					created_at?: string;
					is_active?: boolean;
					logo_organization?: string | null;
					name_organization?: string;
					organization_id?: string;
				};
				Relationships: [];
			};
			organization_permission: {
				Row: {
					created_at: string;
					organization_id: string;
					permission_id: number;
					registered_ticket: string | null;
					role_user: Database['public']['Enums']['role'];
					user_id: string;
				};
				Insert: {
					created_at?: string;
					organization_id: string;
					permission_id?: number;
					registered_ticket?: string | null;
					role_user: Database['public']['Enums']['role'];
					user_id: string;
				};
				Update: {
					created_at?: string;
					organization_id?: string;
					permission_id?: number;
					registered_ticket?: string | null;
					role_user?: Database['public']['Enums']['role'];
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'organization_permission_organization_id_fkey';
						columns: ['organization_id'];
						isOneToOne: false;
						referencedRelation: 'organization';
						referencedColumns: ['organization_id'];
					},
					{
						foreignKeyName: 'organization_permission_registered_ticket_fkey';
						columns: ['registered_ticket'];
						isOneToOne: false;
						referencedRelation: 'access_token';
						referencedColumns: ['access_token_id'];
					},
					{
						foreignKeyName: 'organization_permission_user_id_fkey';
						columns: ['user_id'];
						isOneToOne: false;
						referencedRelation: 'user';
						referencedColumns: ['user_id'];
					}
				];
			};
			professor: {
				Row: {
					description: string | null;
					education_background: Json;
					first_name: string;
					last_name: string;
					professional_experience: Json | null;
					professor_id: number;
					profile_picture: string;
					slug: string | null;
					social_media: string | null;
				};
				Insert: {
					description?: string | null;
					education_background: Json;
					first_name: string;
					last_name: string;
					professional_experience?: Json | null;
					professor_id?: number;
					profile_picture: string;
					slug?: string | null;
					social_media?: string | null;
				};
				Update: {
					description?: string | null;
					education_background?: Json;
					first_name?: string;
					last_name?: string;
					professional_experience?: Json | null;
					professor_id?: number;
					profile_picture?: string;
					slug?: string | null;
					social_media?: string | null;
				};
				Relationships: [];
			};
			section: {
				Row: {
					course_id: number;
					created_at: string;
					order: number;
					section_id: number;
					title: string;
				};
				Insert: {
					course_id: number;
					created_at?: string;
					order: number;
					section_id?: number;
					title: string;
				};
				Update: {
					course_id?: number;
					created_at?: string;
					order?: number;
					section_id?: number;
					title?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'theme_course_id_fkey';
						columns: ['course_id'];
						isOneToOne: false;
						referencedRelation: 'course';
						referencedColumns: ['course_id'];
					}
				];
			};
			type_of_content: {
				Row: {
					created_at: string;
					id: number;
					name_type: string;
				};
				Insert: {
					created_at?: string;
					id?: number;
					name_type: string;
				};
				Update: {
					created_at?: string;
					id?: number;
					name_type?: string;
				};
				Relationships: [];
			};
			user: {
				Row: {
					email: string;
					first_name: string;
					last_name: string;
					phone_number: string | null;
					profile_picture: string | null;
					user_id: string;
				};
				Insert: {
					email: string;
					first_name: string;
					last_name: string;
					phone_number?: string | null;
					profile_picture?: string | null;
					user_id: string;
				};
				Update: {
					email?: string;
					first_name?: string;
					last_name?: string;
					phone_number?: string | null;
					profile_picture?: string | null;
					user_id?: string;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			get_category_with_all: { Args: { p_slug: string }; Returns: Json };
			get_last_capsules: { Args: { p_idbenefactor: string }; Returns: Json };
			get_last_courses: { Args: { p_idbenefactor: string }; Returns: Json };
			get_sections_and_classes_per_course: {
				Args: { p_course_id: number };
				Returns: Json;
			};
			get_viewed_classes: {
				Args: { p_course_id: number; p_idbenefactor: string };
				Returns: Json;
			};
		};
		Enums: {
			role: 'adminOrganization' | 'user' | 'superAdmin';
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
};

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>;

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>];

export type Tables<
	DefaultSchemaTableNameOrOptions extends
		| keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
		| { schema: keyof DatabaseWithoutInternals },
	TableName extends DefaultSchemaTableNameOrOptions extends {
		schema: keyof DatabaseWithoutInternals;
	}
		? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
				DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
		: never = never
> = DefaultSchemaTableNameOrOptions extends {
	schema: keyof DatabaseWithoutInternals;
}
	? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
			DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
			Row: infer R;
	  }
		? R
		: never
	: DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
	? (DefaultSchema['Tables'] & DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
			Row: infer R;
	  }
		? R
		: never
	: never;

export type TablesInsert<
	DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables'] | { schema: keyof DatabaseWithoutInternals },
	TableName extends DefaultSchemaTableNameOrOptions extends {
		schema: keyof DatabaseWithoutInternals;
	}
		? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
		: never = never
> = DefaultSchemaTableNameOrOptions extends {
	schema: keyof DatabaseWithoutInternals;
}
	? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
			Insert: infer I;
	  }
		? I
		: never
	: DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
	? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
			Insert: infer I;
	  }
		? I
		: never
	: never;

export type TablesUpdate<
	DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables'] | { schema: keyof DatabaseWithoutInternals },
	TableName extends DefaultSchemaTableNameOrOptions extends {
		schema: keyof DatabaseWithoutInternals;
	}
		? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
		: never = never
> = DefaultSchemaTableNameOrOptions extends {
	schema: keyof DatabaseWithoutInternals;
}
	? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
			Update: infer U;
	  }
		? U
		: never
	: DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
	? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
			Update: infer U;
	  }
		? U
		: never
	: never;

export type Enums<
	DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums'] | { schema: keyof DatabaseWithoutInternals },
	EnumName extends DefaultSchemaEnumNameOrOptions extends {
		schema: keyof DatabaseWithoutInternals;
	}
		? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
		: never = never
> = DefaultSchemaEnumNameOrOptions extends {
	schema: keyof DatabaseWithoutInternals;
}
	? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
	: DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
	? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
	: never;

export type CompositeTypes<
	PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes'] | { schema: keyof DatabaseWithoutInternals },
	CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
		schema: keyof DatabaseWithoutInternals;
	}
		? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
		: never = never
> = PublicCompositeTypeNameOrOptions extends {
	schema: keyof DatabaseWithoutInternals;
}
	? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
	: PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
	? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
	: never;

export const Constants = {
	public: {
		Enums: {
			role: ['adminOrganization', 'user', 'superAdmin'],
		},
	},
} as const;
