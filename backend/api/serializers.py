from django.contrib.auth.models import User # type: ignore
from rest_framework import serializers # type: ignore
from .models import Note

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id","username","password"]
        extra_kwargs = {"password" : {"write_only":True}} 
        ## This ensures that the password field is write-only, 
        ## meaning it will not be included in the serialized output (JSON response), 
        ## but it can be used to create or update a User instance.

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id","title","content","created_at","author"]
        extra_kwargs = {"author":{"read_only":True}}