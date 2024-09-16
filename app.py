from flask import Flask, request, render_template, url_for, redirect

import formulario 

from datetime import datetime
app = Flask(__name__)

@app.route('/')
def principal():    
    return render_template('index.html')

@app.route('/Ecosistemas')
def Ecosistemas():
    return render_template('Ecosistemas.html')


@app.route('/Flora')
def Flora():
    return render_template('Flora.html')

@app.route('/Fauna')
def Fauna():
    return render_template('Fauna.html')


@app.route('/introduccion')
def introduccion():
    return render_template('introduccion.html') 

@app.route('/mapa_interactivo')
def mapa_interactivo():
    return render_template('mapa_interactivo.html')

@app.route('/Destinos')
def Destinos():
    return render_template('Destinos.html')

@app.route('/Contactanos')
def contactanos():
    return render_template('Contactanos.html')

@app.route('/confirmacion')
def confirmar():
    return render_template('confirmacion.html')

@app.route("/guardar_datos",  methods=["POST"])
def guardar_datos():
    Nombres = request.form['Nombre'];
    Apellidos = request.form['Apellido'];
    Correo = request.form['Correo'];
    Celular = request.form['Celular'];
    Comentarios = request.form['Comentario'];
    fecha_hora = datetime.now().strftime("%Y-%M-%D, %H:%M:%S");
    
    
    with open('registro_personas.csv', 'a') as archivo:
        archivo.write(f"{Nombres},{Apellidos},{Correo},{Celular},{Comentarios},{fecha_hora}\n")
        return redirect(url_for('confirmacion', nombre=Nombres))


@app.route("/confirmacion")
def confirmacion():
    nombre = request.args.get('nombre'),
    return render_template('confirmacion.html', nombre=nombre) 





if(__name__=='__main__'):
     app.run(debug=True)
