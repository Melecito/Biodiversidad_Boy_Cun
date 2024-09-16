

from flask import Flask, request, render_template, url_for, redirect

from datetime import datetime




app = Flask(__name__)

@app.route('/')
def principal():    
    return render_template('index.html')

@app.route('/Contactanos')
def contactanos():
    return render_template('Contactanos.html')

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


@app.route("/confirmacion")
def confirmacion():
    nombre = request.args.get('nombre'),
    return render_template('confirmacion.html', nombre=nombre) 



if(__name__=='__main__'):
     app.run(debug=True)
    