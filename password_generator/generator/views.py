from django.shortcuts import render
import random
import string


def home(request):
    return render(request, 'generator/home.html', {'loop_times' : range(6, 21) })


def password(request):
    characters = string.ascii_lowercase

    if request.GET.get('uppercase'):
        characters = string.ascii_letters

    if request.GET.get('numbers'):
        characters += string.digits

    if request.GET.get('special'):
        characters += string.punctuation

    length = int(request.GET.get('length', 12))

    generated_password = ''
    for i in range(length):
        generated_password += random.choice(characters)

    return render(request, 'generator/password.html', {'password': generated_password})

def about(request):
    return render(request, 'generator/about.html')
