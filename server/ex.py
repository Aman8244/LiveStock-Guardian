import numpy as np
import pandas as pd
import tensorflow as tf
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from tensorflow import keras
from tensorflow.keras import layers

# Load your dataset (replace 'your_dataset.csv' with your actual data)
data = pd.read_csv('your_dataset.csv')

# Preprocess data
# Assuming 'Disease' is the target variable, and the other columns are features.
X = data[['Animal', 'Age', 'Temperature', 'Symptom1', 'Symptom2', 'Symptom3']]
y = data['Disease']

# Encode categorical variables (e.g., Animal, Symptom1, Symptom2, Symptom3)
encoder = LabelEncoder()
X['Animal'] = encoder.fit_transform(X['Animal'])
X['Symptom1'] = encoder.fit_transform(X['Symptom1'])
X['Symptom2'] = encoder.fit_transform(X['Symptom2'])
X['Symptom3'] = encoder.fit_transform(X['Symptom3'])

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Build a deep learning model
model = keras.Sequential([
    layers.Input(shape=(6,)),              # 6 input features
    layers.Dense(64, activation='relu'),   # Hidden layer with 64 units and ReLU activation
    layers.Dense(32, activation='relu'),   # Hidden layer with 32 units and ReLU activation
    layers.Dense(1, activation='sigmoid')  # Output layer with binary classification
])

# Compile the model
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Train the model
model.fit(X_train, y_train, epochs=10, batch_size=32, validation_split=0.2)

# Evaluate the model
loss, accuracy = model.evaluate(X_test, y_test)
print(f'Test accuracy: {accuracy}')

# Make predictions
predictions = model.predict(X_test)
print(predictions)