from rest_framework import serializers
from .models import *

class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student 
        fields = ('pk', 'name', 'email', 'document', 'phone', 'registrationDate')
    
class SoutenanceSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Soutenance 
        fields = ('s_id', 'laureat_id', 'dossier_id', 'theme', 'type', 'sujet', 'etat')
        
class DossierSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Dossier 
        fields = ('d_id', 'lien', 'etat')
        
class LaureatSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Laureat 
        fields = ('l_id', 'nom', 'prenom', 'email')