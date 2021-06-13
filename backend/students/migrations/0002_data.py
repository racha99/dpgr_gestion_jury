from django.db import migrations

def create_data(apps, schema_editor):
    Student = apps.get_model('students', 'Student')
    Student(name="Joe Silver", email="joe@email.com", document="22342342", phone="00000000").save()
    
    Soutenance = apps.get_model('students', 'Soutenance')
    Dossier = apps.get_model('students', 'Dossier')
    Laureat = apps.get_model('students', 'Laureat')
    
    Soutenance(s_id=1, laureat_id=Laureat(l_id=1, nom="n1", prenom="p1", email="n1p1@gmail.com"), dossier_id=Dossier(d_id=1, etat="A", lien="https://drive.google.com/drive/folders/1DWJMlNb0UTU0R6vPNbLRJq7rdzQcTDFo"), theme="ML", type="D", etat="N", sujet="sujet1").save()
    Soutenance(s_id=2, laureat_id=Laureat(l_id=2, nom="n2", prenom="p2", email="n2p2@gmail.com"), dossier_id=Dossier(d_id=2, etat="V", lien="https://drive.google.com/drive/folders/1DWJMlNb0UTU0R6vPNbLRJq7rdzQcTDFo"), theme="SQ", type="H", etat="N", sujet="sujet2").save()
    Soutenance(s_id=3, laureat_id=Laureat(l_id=3, nom="n3", prenom="p3", email="n3p3@gmail.com"), dossier_id=Dossier(d_id=3, etat="R", lien="https://drive.google.com/drive/folders/1DWJMlNb0UTU0R6vPNbLRJq7rdzQcTDFo"), theme="SQ", type="D", etat="R", sujet="sujet3").save()
    Soutenance(s_id=4, laureat_id=Laureat(l_id=4, nom="n4", prenom="p4", email="n4p4@gmail.com"), dossier_id=Dossier(d_id=4, etat="A", lien="https://drive.google.com/drive/folders/1DWJMlNb0UTU0R6vPNbLRJq7rdzQcTDFo"), theme="ST", type="D", etat="A", sujet="sujet4").save()
    
    
    Dossier(d_id=1, etat="A", lien="https://drive.google.com/drive/folders/1DWJMlNb0UTU0R6vPNbLRJq7rdzQcTDFo").save()
    Dossier(d_id=2, etat="V", lien="https://drive.google.com/drive/folders/1DWJMlNb0UTU0R6vPNbLRJq7rdzQcTDFo").save()
    Dossier(d_id=3, etat="R", lien="https://drive.google.com/drive/folders/1DWJMlNb0UTU0R6vPNbLRJq7rdzQcTDFo").save()
    Dossier(d_id=4, etat="A", lien="https://drive.google.com/drive/folders/1DWJMlNb0UTU0R6vPNbLRJq7rdzQcTDFo").save()
    
    
    Laureat(l_id=1, nom="n1", prenom="p1", email="n1p1@gmail.com").save()
    Laureat(l_id=2, nom="n2", prenom="p2", email="n2p2@gmail.com").save()
    Laureat(l_id=3, nom="n3", prenom="p3", email="n3p3@gmail.com").save()
    Laureat(l_id=4, nom="n4", prenom="p4", email="n4p4@gmail.com").save()

class Migration(migrations.Migration):

    dependencies = [
        ('students', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]
