from django.contrib.auth.base_user import BaseUserManager


class UserManager(BaseUserManager):
    def _create_user(self, phone, password=None, **extra_fields):
        if not phone:
            raise ValueError("phone is required!")

        user = self.model(phone=phone, **extra_fields)
        user.set_password(password)

        user.save(using=self.db)
        return user

    def create_user(self, phone, password=None, **extra_fields):
        extra_fields.setdefault("is_superuser", False)

        return self._create_user(phone, password, **extra_fields)

    def create_superuser(self, phone, password=None, **extra_fields):
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_staff", True)

        return self._create_user(phone, password, **extra_fields)
