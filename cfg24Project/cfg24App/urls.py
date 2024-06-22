from django.urls import path                                                                                                                                                        
from . import views

urlpatterns = [
   path(r'broadcast', views.broadcast_sms, name="default"),
   path('api/submit/', views.submit_data, name='submit_data'),
   path('create/record/', views.create_record, name='create_data'),
]