from rest_framework import serializers
from .models import *

    
class SoutenanceSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Soutenance 
        fields = ('s_id', 'laureat_id', 'dossier_id', 'theme', 'type', 'sujet', 'etat')
        
class DossierSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Dossier 
        fields = ('d_id', 'etat', 'lien')
        
class LaureatSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Laureat 
        fields = ('l_id', 'nom', 'prenom', 'email')
        
class JurySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Jury 
        fields = '__all__'

class JuryStnSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = JuryStn 
        fields = '__all__'


class StnPrstSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = StnPrst 
        fields = ('s_id', 'laureat_nom', 'dossier_lien', 'dossier_etat', 'theme', 'type', 'sujet', 'etat')