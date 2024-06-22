from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import BookSerializer, NoteSerializer,FarmerSerializer
from .models import Book, Notes,Farmer , Farmers
from twilio.rest import Client
from django.conf import settings                                                                                                                                                      
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
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
@api_view(['GET'])
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

@api_view(['POST'])
def submit_data(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        location = data.get('location')
        type = data.get('type')
        crop = data.get('crop')
        soil = data.get('soil')
        query = data.get('query')
        # Process the data as needed
        # response_data = {'message': 'Data received successfully', 'name': name, 'email': email}
        message_to_broadcast = (query)
        client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
        for recipient in settings.SMS_BROADCAST_TO_NUMBERS:
            print(recipient)
            if recipient:
                client.messages.create(to=recipient,
                                    from_=settings.TWILIO_NUMBER,
                                    body=message_to_broadcast)
        return HttpResponse("messages sent!" + message_to_broadcast, 200)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)
    

@api_view(['POST'])
def create_record(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('username')
        contact_no = data.get('phoneNumber')
        email = data.get('emailaddress')
        aadhar_number = data.get('aadharNumber')
        pincode = data.get('pincode')
        area = data.get('area')     

        # Create new FarmerAdmin instance
        farmer_admin = Farmers(
            f_name=name,
            contact_no=contact_no,
            email=email,
            aadhar_number=aadhar_number,
            pincode=pincode,
            area=area
        )
        farmer_admin.save()
        return HttpResponse("ok",status=200)

        

    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)
    

@api_view(['GET'])
def get_all_farmers(request):
    try:
        farmers = Farmers.objects.all()
        farmers_list = list(farmers.values())
        return JsonResponse(farmers_list, safe=False, status=200)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)
    
