from django.db import models

class Student(models.Model):
    name = models.CharField("Name", max_length=240)
    email = models.EmailField()
    document = models.CharField("Document", max_length=20)
    phone = models.CharField(max_length=20)
    registrationDate = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
        return self.name

class Laureat(models.Model):
    
    l_id = models.IntegerField(unique=True, primary_key=True)
    nom = models.CharField("Nom", max_length=50)
    prenom = models.CharField("Prenom", max_length=50)
    email = models.EmailField()
    
    def __str__(self):
        return self.l_id

class Dossier(models.Model):
    
    ETATS = [
        ('V', "Validé"),
        ('R', "Refusé"),
        ('A', "En attente"),
    ]
    
    d_id = models.IntegerField(unique=True, primary_key=True)
    etat = models.CharField("Etat", max_length=1, choices=ETATS, default='A')
    lien = models.URLField(max_length = 200)
    
    def __str__(self):
        print("d_id =", self.d_id)
        print("etat =", self.etat)
        print("lien =", end=" ")
        return self.lien

class Soutenance(models.Model):
    
    THEMES = [
        ('ML', "Machine Learning"),
        ('ST', "Systeme d'Information"),
        ('SQ', "Systeme Informatique"),
        ('RS', "Réseaux & Sécurité"),
        ('GL', "Géni-Logiciel"),
    ]
    
    TYPES = [
        ('D', "Doctorat"),
        ('H', "Habilitation"),
    ]
    
    ETATS = [
        ('A', "Autorisée"),
        ('R', "Refusée"),
        ('N', "Non définie"),
        ('C', "Cloturée"),
    ]
    
    s_id = models.IntegerField(unique=True, primary_key=True)
    laureat_id = models.ForeignKey(to='Laureat', to_field='l_id', on_delete=models.CASCADE)
    dossier_id = models.ForeignKey(to='Dossier', to_field='d_id', on_delete=models.CASCADE)
    theme = models.CharField("Thème", max_length=2, choices=THEMES)
    type = models.CharField("Type", max_length=1, choices=TYPES)
    etat = models.CharField("Etat", max_length=1, choices=ETATS, default='N')
    sujet = models.CharField("Sujet", max_length=150)
    
    def __str__(self):
        return self.s_id
    
class StnPrst(models.Model):
    
    THEMES = [
        ('ML', "Machine Learning"),
        ('ST', "Systeme d'Information"),
        ('SQ', "Systeme Informatique"),
        ('RS', "Réseaux & Sécurité"),
        ('GL', "Géni-Logiciel"),
    ]
    
    TYPES = [
        ('D', "Doctorat"),
        ('H', "Habilitation"),
    ]
    
    ETATS = [
        ('A', "Autorisée"),
        ('R', "Refusée"),
        ('N', "Non définie"),
        ('C', "Cloturée"),
    ]
    
    ETATS_D = [
        ('V', "Validé"),
        ('R', "Refusé"),
        ('A', "En attente"),
    ]
    
    s_id = models.IntegerField(unique=True, primary_key=True)
    laureat_nom = models.CharField("Nom Laureat", max_length=100)
    dossier_lien = models.CharField("Lien Dossier", max_length=200)
    dossier_etat = models.CharField("Etat Dossier", max_length=1, choices=ETATS_D, default='A')
    theme = models.CharField("Thème", max_length=2, choices=THEMES)
    type = models.CharField("Type", max_length=1, choices=TYPES)
    etat = models.CharField("Etat", max_length=1, choices=ETATS, default='N')
    sujet = models.CharField("Sujet", max_length=150)
    
    def __str__(self):
        return self.s_id
