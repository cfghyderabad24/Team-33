from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import BookSerializer, NoteSerializer,FarmerSerializer
from .models import Book, Notes,Farmer
from twilio.rest import Client
from django.conf import settings                                                                                                                                                      
from django.http import HttpResponse
# Create your views here.

def front(request):
    context = {
        }

    return render(request, "index.html", context)

@api_view(['GET', 'POST'])
def note(request):

    if request.method == 'GET':
        note = Notes.objects.all()
        serializer = NoteSerializer(note, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def note_detail(request, pk):
    try:
        note = Notes.objects.get(pk=pk)
    except Notes.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        note.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

# Create your views here.

def broadcast_sms(request):
    message_to_broadcast = ("How are you")
    client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
    for recipient in settings.SMS_BROADCAST_TO_NUMBERS:
        print(recipient)
        if recipient:
            client.messages.create(to=recipient,
                                   from_=settings.TWILIO_NUMBER,
                                   body=message_to_broadcast)
    return HttpResponse("messages sent!" + message_to_broadcast, 200)

# views.py

from django.shortcuts import render, redirect
from cfg24App import forms

@api_view(['GET'])
def farmers_list(request):
    if request.method == 'GET':
        farmers = Farmer.objects.all()
        serializer = FarmerSerializer(farmers, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def BookList(request):
    if request.method == 'GET':
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response('hello')