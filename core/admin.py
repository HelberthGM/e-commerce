from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

# Register your models here.
class CustomUserAdmin(UserAdmin):
    model = CustomUser

    # Campos visibles al editar un usuario
    fieldsets = UserAdmin.fieldsets + (
        ('Additional Info', {
            'fields': ('city', 'country', 'address', 'phone'),
        }),
    )

    # Campos visibles al crear un usuario
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {
            'classes': ('wide',),
            'fields': (
                'email', 'first_name', 'last_name',
                'city', 'country', 'address', 'phone',
            ),
        }),
    )

    # Lista de usuarios en el admin
    list_display = ("username", "email", "first_name", "last_name", "city", "country", "is_staff", "is_active")
    search_fields = ("username", "email", "first_name", "last_name", "city", "country")
    ordering = ("username",)

admin.site.register(CustomUser, CustomUserAdmin)