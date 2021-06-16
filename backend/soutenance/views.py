from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.renderers import JSONRenderer
from rest_framework import status

from .models import *
from .serializers import *

# @api_view(['GET', 'POST'])
# def students_list(request):
#     if request.method == 'GET':
#         data = Student.objects.all()

#         serializer = StudentSerializer(data, context={'request': request}, many=True)

#         return Response(serializer.data)

#     elif request.method == 'POST':
#         serializer = StudentSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(status=status.HTTP_201_CREATED)
            
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['PUT', 'DELETE'])
# def students_detail(request, pk):
#     try:
#         student = Student.objects.get(pk=pk)
#     except Student.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'PUT':
#         serializer = StudentSerializer(student, data=request.data,context={'request': request})
#         if serializer.is_valid():
#             serializer.save()
#             return Response(status=status.HTTP_204_NO_CONTENT)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     elif request.method == 'DELETE':
#         student.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def soutenances_list(request):
    if request.method == 'GET':
        data = Soutenance.objects.all()

        serializer = SoutenanceSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = SoutenanceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def soutenances_detail(request, s_id):
    try:
        soutenance = Soutenance.objects.get(s_id=s_id)
    except Soutenance.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = SoutenanceSerializer(soutenance, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        soutenance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
@api_view(['GET'])
def get_stn_list_by_type(request, type):
    list_stn = []
    
    for stn in Soutenance.objects.all():
        if stn.type == type:
            dossier = Dossier.objects.get(d_id = stn.s_id)
            laureat = Laureat.objects.get(l_id = stn.s_id)
            stn_prst = StnPrst(s_id=stn.s_id, laureat_nom=laureat.nom+" "+laureat.prenom, dossier_lien=dossier.lien, dossier_etat=dossier.etat, etat=stn.etat, theme=stn.theme, type=stn.type, sujet=stn.sujet)
            list_stn.append(stn_prst)
        
    data = list_stn

    serializer = StnPrstSerializer(data, context={'request': request}, many=True)

    return Response(serializer.data)

@api_view(['GET'])
def get_stn_list_by_etatd(request, etat_d):
    list_stn = []
    
    for stn in Soutenance.objects.all():
        if stn.dossier_id.etat == etat_d:
            dossier = Dossier.objects.get(d_id = stn.s_id)
            laureat = Laureat.objects.get(l_id = stn.s_id)
            stn_prst = StnPrst(s_id=stn.s_id, laureat_nom=laureat.nom+" "+laureat.prenom, dossier_lien=dossier.lien, dossier_etat=dossier.etat, etat=stn.etat, theme=stn.theme, type=stn.type, sujet=stn.sujet)
            list_stn.append(stn_prst)
        
    data = list_stn

    serializer = StnPrstSerializer(data, context={'request': request}, many=True)

    return Response(serializer.data)

@api_view(['PUT'])
def updt_dossier_etat(request, s_id):
    try:
        soutenance = Soutenance.objects.get(s_id=s_id)
        dossier = Dossier.objects.get(d_id=soutenance.dossier_id.d_id)
        #dossier.etat = request.data['dossier_etat']
        #new_dossier = Dossier(d_id=dossier.d_id, etat= request.data['dossier_etat'], lien=dossier.lien)
        #request.data = new_dossier
        
    except Soutenance.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = DossierSerializer(dossier, data=request.data, context={'request': request})
    
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def updt_stn_etat(request, s_id):
    try:
        soutenance = Soutenance.objects.get(s_id=s_id)
        
    except Soutenance.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = SoutenanceSerializer(soutenance, data=request.data, context={'request': request})
    
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
