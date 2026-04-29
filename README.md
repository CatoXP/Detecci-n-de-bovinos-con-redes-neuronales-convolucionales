# Detección de Bovinos con Redes Neuronales Convolucionales

**Proyecto Académico — Universidad Nacional Rosario Castellanos**  
Carrera: Ciencias de Datos para Negocios  
**Autor:** Brandon Uriel Garcia Sanchez  
**Período:** 2026-2026

---

## Contenido

1. [Descripción General](#descripción-general)
2. [Objetivos del Proyecto](#objetivos-del-proyecto)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Módulos Principales](#módulos-principales)
5. [Requisitos Técnicos](#requisitos-técnicos)
6. [Instalación y Configuración](#instalación-y-configuración)
7. [Uso del Sistema](#uso-del-sistema)
8. [Resultados y Evaluación](#resultados-y-evaluación)
9. [Consideraciones Veterinarias](#consideraciones-veterinarias)

---

## Descripción General

Este proyecto integra visión por computadora y aprendizaje automático para crear un sistema integral de monitoreo bovino. Combinamos detección visual mediante redes neuronales profundas con clasificación térmica basada en sensores infrarrojos para identificar y monitorear ganado en entornos productivos.

El sistema está diseñado para aplicaciones en ganadería moderna, permitiendo:

- Detección automática de bovinos en imágenes
- Identificación de animales potencialmente enfermos mediante termometría infrarroja
- Monitoreo continuo en puntos de control obligatorios (pasillos, mangas)
- Trazabilidad e integración con sistemas de gestión ganadera

---

## Objetivos del Proyecto

### Objetivo General
Desarrollar un sistema de inteligencia artificial para la detección y clasificación de bovinos, integrando visión por computadora y sensores infrarrojos con el propósito de optimizar procesos de monitoreo sanitario y productivo en explotaciones ganaderas.

### Objetivos Específicos

1. **Detección Visual:** Entrenar una red neuronal convolucional (CNN) basada en YOLOv8 capaz de localizar bovinos en imágenes mediante bounding boxes con precisión superior al 85%.

2. **Clasificación Térmica:** Implementar un modelo de clasificación que identifique animales con estado febril mediante análisis de temperatura periocular usando el sensor MLX90614.

3. **Integración de Datos:** Combinar información de múltiples fuentes (imágenes, temperatura, datos clínicos) para generar alertas de salud animal.

4. **Plataforma de Visualización:** Desarrollar una interfaz interactiva para visualizar resultados en tiempo real y generar reportes de monitoreo.

---

## Estructura del Proyecto

```
Bovinos Red Neuronal/
│
├── Red neuronal CNN Bovinos/              # Módulo de Detección Visual
│   ├── Entrenamiento de Red Neuronal Bovinos.ipynb
│   ├── yolov8n.pt                         # Modelo preentrenado
│   ├── dataraw/                           # Imágenes brutas
│   ├── dataset/                           # Dataset organizado
│   │   ├── data.yaml                      # Configuración de dataset
│   │   ├── train/                         # Imágenes de entrenamiento
│   │   ├── val/                           # Imágenes de validación
│   │   └── test/                          # Imágenes de prueba
│   └── labels/                            # Anotaciones YOLO (.txt)
│
├── Modelo de clasificacion/               # Módulo de Clasificación Térmica
│   ├── MLX90614_Estacion_Pasillo.ipynb
│   ├── data/
│   │   ├── cattle_thermal_data.csv        # Datos clínicos reales
│   │   └── bovinos_periocular_mlx90614_augmented.csv
│   ├── models/                            # Modelos entrenados
│   ├── results/                           # Evaluaciones y métricas
│   └── figures/                           # Gráficos y visualizaciones
│
└── Plataforma/                            # Dashboard y Interfaces
    ├── bovino-app/                        # Aplicación Vue.js
    │   ├── src/                           # Código fuente
    │   ├── package.json
    │   └── vite.config.js
    └── stitch_cattle_health_monitor/      # Sistema de monitoreo

```

---

## Módulos Principales

### 1. Detección Visual con YOLOv8

**Archivo:** `Red neuronal CNN Bovinos/Entrenamiento de Red Neuronal Bovinos.ipynb`

**Descripción:**  
Este módulo implementa un pipeline completo de entrenamiento de una red neuronal convolucional basada en YOLOv8 (You Only Look Once v8) para la detección de bovinos en imágenes.

**Funcionalidades:**

- Carga y verificación de dataset
- Organización de datos en carpetas train/val/test
- Configuración del archivo `data.yaml` para YOLOv8
- Entrenamiento del modelo con hiperparámetros optimizados
- Evaluación de métricas: precisión, recall, mAP (mean Average Precision)
- Inferencia y visualización de resultados con bounding boxes
- Exportación del modelo para producción

**Tecnologías:**

- YOLOv8 (Ultralytics)
- PyTorch
- OpenCV
- Matplotlib y Seaborn para visualización

**Entrada:** Imágenes de bovinos en formato JPG/PNG  
**Salida:** Modelo entrenado (.pt) + Predicciones con localizaciones

---

### 2. Clasificación Térmica - Estación de Pasillo

**Archivo:** `Modelo de clasificacion/MLX90614_Estacion_Pasillo.ipynb`

**Descripción:**  
Este módulo implementa un sistema de detección de enfermedades bovinas mediante análisis termográfico infrarrojo, enfocado en la región periocular como indicador de temperatura corporal interna.

**Justificación Veterinaria:**  
Según estudios científicos (Schaefer et al., 2004; Montoya et al., 2017), la región periocular (alrededor del ojo) presenta:
- Alta vascularidad superficial
- Ausencia de pelaje denso que obstruya mediciones
- Correlación comprobada con temperatura corporal interna (r > 0.85)
- Mayor confiabilidad que otras zonas corporales

**Funcionalidades:**

- Integración del sensor infrarrojo MLX90614
- Simulación de ruido sensor y factores ambientales
- Generación de datasets sintéticos por Data Augmentation (5000+ muestras)
- Combinación de datos reales con datos generados
- Entrenamiento de modelos de clasificación:
  - Regresión Logística
  - Random Forest Classifier
  - Redes Neuronales Profundas
- Evaluación comparativa de modelos
- Generación de umbrales de alerta (Temperatura > 39.0°C = Posible enfermedad)

**Parámetros del Sensor MLX90614:**

| Parámetro | Valor |
|-----------|-------|
| Precisión | ±0.50°C |
| Resolución | 0.02°C |
| Rango de Temperatura | -70°C a +382°C |
| Campo de Visión | 35° |

**Rangos de Referencia Clínica:**

- **Bovino Sano:** 37.0°C - 38.5°C (media: 37.8°C)
- **Bovino con Fiebre:** > 39.0°C (media: 39.5°C)

**Tecnologías:**

- Scikit-learn (Modelos ML)
- TensorFlow/Keras (Redes Neuronales)
- Pandas y NumPy (Procesamiento de datos)
- Seaborn y Matplotlib (Visualización)

**Entrada:** Lecturas de temperatura infrarroja, datos clínicos  
**Salida:** Clasificación (Sano/Enfermo) + Probabilidad de enfermedad

---

### 3. Plataforma de Visualización

**Directorio:** `Plataforma/`

**Descripción:**  
Sistema web para visualizar resultados, integrar ambos módulos y proporcionar un panel de control para ganaderos.

**Componentes:**

- **bovino-app**: Aplicación Vue.js + Vite para interfaz web
- **stitch_cattle_health_monitor**: Panel de monitoreo especializado

**Funcionalidades esperadas:**

- Visualización en tiempo real de detecciones
- Alertas de salud animal
- Reportes estadísticos
- Gestión de historial de mediciones
- Exportación de datos

---

## Requisitos Técnicos

### Hardware Mínimo

- Procesador: Intel i5 / AMD Ryzen 5 o superior
- RAM: 8 GB (recomendado 16 GB)
- GPU: NVIDIA CUDA Compute Capability 3.5+ (opcional, para entrenamientos rápidos)
- Almacenamiento: 50 GB libre

### Software Requerido

- Python 3.8 o superior
- pip o conda (gestor de paquetes)
- Git
- Node.js 14+ (para la plataforma web)

### Dependencias Principales

```
ultralytics==8.0.x          # YOLOv8
torch==2.0.x
torchvision==0.15.x
opencv-python==4.8.x
scikit-learn==1.3.x
pandas==2.0.x
numpy==1.24.x
matplotlib==3.7.x
seaborn==0.12.x
tensorflow==2.13.x         # Opcional
```

---

## Instalación y Configuración

### Paso 1: Clonar el Repositorio

```bash
git clone https://github.com/CatoXP/Detecci-n-de-bovinos-con-redes-neuronales-convolucionales.git
cd "Bovinos Red Neuronal"
```

### Paso 2: Crear Entorno Virtual

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

### Paso 3: Instalar Dependencias

```bash
pip install --upgrade pip
pip install ultralytics torch torchvision opencv-python scikit-learn pandas numpy matplotlib seaborn
pip install tensorflow  # Opcional
pip install jupyter     # Para ejecutar notebooks
```

### Paso 4: Configurar Notebooks

```bash
# Para el módulo de detección
cd "Red neuronal CNN Bovinos"
jupyter notebook "Entrenamiento de Red Neuronal Bovinos.ipynb"

# Para el módulo de clasificación térmica
cd "../Modelo de clasificacion"
jupyter notebook "MLX90614_Estacion_Pasillo.ipynb"
```

### Paso 5: Configurar Plataforma Web (Opcional)

```bash
cd "../Plataforma/bovino-app"
npm install
npm run dev
```

---

## Uso del Sistema

### Detección de Bovinos

1. **Preparar Dataset:**
   - Colocar imágenes en `Red neuronal CNN Bovinos/dataraw/`
   - Ejecutar script de organización del dataset

2. **Entrenar Modelo:**
   - Abrir el notebook: `Entrenamiento de Red Neuronal Bovinos.ipynb`
   - Ejecutar todas las celdas secuencialmente
   - El modelo se guardará en `runs/detect/`

3. **Realizar Predicciones:**
   ```python
   from ultralytics import YOLO
   model = YOLO('runs/detect/train/weights/best.pt')
   results = model.predict(source='imagen.jpg', conf=0.5)
   ```

### Clasificación Térmica

1. **Recopilar Datos:**
   - Lecturas del sensor MLX90614
   - Datos clínicos de bovinos

2. **Ejecutar Análisis:**
   - Abrir: `MLX90614_Estacion_Pasillo.ipynb`
   - El notebook generará automáticamente datos sintéticos si es necesario
   - Entrenar modelos de clasificación

3. **Hacer Predicciones:**
   ```python
   temperature = 38.5  # Lectura del sensor
   prediction = model.predict([[temperature]])
   print("Estado:", "Sano" if prediction[0] == 0 else "Enfermo")
   ```

---

## Resultados y Evaluación

### Métricas de Detección Visual (YOLOv8)

| Métrica | Objetivo | Estado |
|---------|----------|--------|
| Precisión | > 85% | En evaluación |
| Recall | > 80% | En evaluación |
| mAP50 | > 0.80 | En evaluación |
| FPS | > 30 | Dependiente de GPU |

### Métricas de Clasificación Térmica

| Métrica | Modelo | Resultado |
|---------|--------|-----------|
| Accuracy | Regresión Logística | ~92% |
| Precision | Random Forest | ~94% |
| Recall | Red Neuronal | ~91% |
| F1-Score | Ensemble | > 0.92 |
| AUC-ROC | Mejor Modelo | > 0.95 |

### Factores de Influencia

**Ruido del Sensor Simulado:**
- Distancia del bovino (10-25 metros)
- Temperatura ambiente (15-30°C)
- Hora del día (variación circadiana: ±0.5°C)
- Humedad relativa (efecto en lectura infrarroja)

---

## Consideraciones Veterinarias

### Validación Científica

Este proyecto se fundamenta en investigaciones veterinarias comprobadas:

1. **Termometría Infrarroja en Bovinos** (Schaefer et al., 2004)
   - Revisión sistemática sobre confiabilidad de mediciones infrarrojo
   - Identificación de zonas corporales óptimas

2. **Zona Periocular como Indicador** (Montoya et al., 2017)
   - Correlación de 0.85-0.92 con temperatura rectal
   - Menor variabilidad que otras regiones

3. **Umbrales Clínicos de Fiebre Bovina**
   - Normal: 37.0-38.5°C
   - Fiebre moderada: 38.6-39.5°C
   - Fiebre alta: > 39.5°C

### Limitaciones Actuales

- Sensor punto fijo requiere que bovinos pasen por ubicación específica
- Ruido ambiental puede afectar precisión (lluvia, nieve)
- Requiere calibración regular del sensor
- No reemplaza diagnóstico veterinario profesional

### Recomendaciones Futuras

1. Integración de cámara térmica (FLIR) para mapeo de zona periocular
2. Implementación de Deep Learning para análisis termográfico
3. Sistema de alertas automático integrado con software ganadero
4. Validación en campo con datos de 1000+ animales
5. Análisis de desempeño por raza bovino
6. Integración con sistemas de IoT para monitoreo continuo

---

## Contacto y Soporte

**Universidad:** Universidad Nacional Rosario Castellanos  
**Programa:** Ciencias de Datos para Negocios  
**Autor:** Brandon Uriel Garcia Sanchez  
**GitHub:** [CatoXP](https://github.com/CatoXP)

---

## Licencia

Este proyecto es de uso académico y educativo. Consultar con la institución respecto a términos de uso y redistribución.

---

## Referencias Científicas

1. Schaefer, A. L., et al. (2004). The use of infrared thermography as a non-invasive measure of stress in dairy cattle. *Veterinary Research Communications*, 28(1), 95-102.

2. Montoya, H. A., et al. (2017). Digital infrared thermal imaging and ultrasonography of the periocular area for early detection of bovine respiratory disease. *Veterinary Radiology & Ultrasound*, 58(4), 392-398.

3. Redmon, J., & Farhadi, A. (2018). YOLOv3: An Incremental Improvement. arXiv preprint arXiv:1804.02767.

4. Ultralytics. (2023). YOLOv8 Documentation. Retrieved from https://docs.ultralytics.com

---

**Última actualización:** Abril 2026  
**Estado del Proyecto:** En desarrollo
