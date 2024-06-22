"""
URL configuration for cfg24Project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from cfg24App.views import front ,note, note_detail, Farmer


urlpatterns = [
    path('admin/', admin.site.urls),
    path("", front, name="front"),
    path("notes/", note, name="note"),
    path("notes/<int:pk>/", note_detail, name="detail"),
    path("", include('cfg24App.urls')),
    path('farmer/', Farmer, name='farmers_list'),
    path('api/', include('cfg24App.urls')),
]
# urls.py
