# Generated by Django 3.2.4 on 2021-06-13 13:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dossier',
            fields=[
                ('d_id', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('etat', models.CharField(choices=[('V', 'Validé'), ('R', 'Refusé'), ('A', 'En attente')], default='A', max_length=1, verbose_name='Etat')),
                ('lien', models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name='Laureat',
            fields=[
                ('l_id', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('nom', models.CharField(max_length=50, verbose_name='Nom')),
                ('prenom', models.CharField(max_length=50, verbose_name='Prenom')),
                ('email', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=240, verbose_name='Name')),
                ('email', models.EmailField(max_length=254)),
                ('document', models.CharField(max_length=20, verbose_name='Document')),
                ('phone', models.CharField(max_length=20)),
                ('registrationDate', models.DateField(auto_now_add=True, verbose_name='Registration Date')),
            ],
        ),
        migrations.CreateModel(
            name='Soutenance',
            fields=[
                ('s_id', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('theme', models.CharField(choices=[('ML', 'Machine Learning'), ('ST', "Systeme d'Information"), ('SQ', 'Systeme Informatique'), ('RS', 'Réseaux & Sécurité'), ('GL', 'Géni-Logiciel')], max_length=2, verbose_name='Thème')),
                ('type', models.CharField(choices=[('D', 'Doctorat'), ('H', 'Habilitation')], max_length=1, verbose_name='Type')),
                ('etat', models.CharField(choices=[('A', 'Autorisée'), ('R', 'Refusée'), ('N', 'Non définie'), ('C', 'Cloturée')], default='N', max_length=1, verbose_name='Etat')),
                ('sujet', models.CharField(max_length=150, verbose_name='Sujet')),
                ('dossier_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='students.dossier')),
                ('laureat_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='students.laureat')),
            ],
        ),
    ]
