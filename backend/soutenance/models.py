from django.db import models


class Jury(models.Model):
    
    TYPES = [
        ('E', "Expert"),
        ('P', "Professeur"),
    ]
    
    j_id = models.IntegerField(unique=True, primary_key=True)
    nom = models.CharField("Nom", max_length=50)
    prenom = models.CharField("Prenom", max_length=50)
    domaine_xp = models.CharField("Domaine d'expertise", max_length=70)
    type = models.CharField("Type", max_length=1, choices=TYPES)
    tel_num = models.CharField("Numero de telephone", max_length=15)
    email = models.EmailField()
    
    def __str__(self):
        return self.j_id
    
class JuryStn(models.Model):
    
    ROLES = [
        ('JU', "Jury"),
        ('RP', "Rapporteur"),
        ('DJ', "Directeur des Jurys"),
        ('DR', "Directeur des Rapporteurs"),
    ]
    
    js_id = models.IntegerField(unique=True, primary_key=True)
    soutenance_id = models.ForeignKey(to='Soutenance', to_field='s_id', on_delete=models.CASCADE)
    jury_id = models.ForeignKey(to='Jury', to_field='j_id', on_delete=models.CASCADE)
    role = models.CharField("Role", max_length=2, choices=ROLES)
    
    def __str__(self):
        return self.js_id

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
