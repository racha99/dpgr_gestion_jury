"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from soutenance import views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/soutenance/getSoutenances/$', views.soutenances_list),
    re_path(r'^api/soutenance/getSoutenance/([0-9])$', views.soutenances_detail),
    re_path(r'^api/soutenance/updtDossierEtat/([0-9])$', views.updt_dossier_etat),
    re_path(r'^api/soutenance/updtStnEtat/([0-9])$', views.updt_stn_etat),
    re_path(r'^api/soutenance/getStnListByType/([A-Za-z])$', views.get_stn_list_by_type),
    re_path(r'^api/soutenance/getStnListByEtatD/([A-Za-z])$', views.get_stn_list_by_etatd),
]
