import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt

st.set_page_config(page_title="Farmer Data Analysis", layout="wide")

st.title("Farmer Data Analysis")

uploaded_file = st.file_uploader("Choose a CSV file", type="csv")

if uploaded_file is not None:
    df = pd.read_csv(uploaded_file)

    st.header("Data Preview")
    st.write(df.head())

    st.header("Distribution of Crops Grown")
    fig, ax = plt.subplots(figsize=(12, 6))
    df['crop_grown'].value_counts().plot(kind='bar', color='skyblue', ax=ax)
    ax.set_title('Distribution of Crops Grown')
    ax.set_xlabel('Crop Grown')
    ax.set_ylabel('Number of Farmers')
    plt.xticks(rotation=45)
    plt.tight_layout()
    st.pyplot(fig)

    # Area Ploughed Distribution
    st.header("Distribution of Area Ploughed")
    fig, ax = plt.subplots(figsize=(10, 6))
    ax.hist(df['area_ploughed'], bins=15, color='lightgreen', edgecolor='black')
    ax.set_title('Distribution of Area Ploughed')
    ax.set_xlabel('Area Ploughed (acres)')
    ax.set_ylabel('Number of Farmers')
    ax.grid(axis='y', alpha=0.75)
    plt.tight_layout()
    st.pyplot(fig)

    # Gender Distribution
    st.header("Gender Distribution of Farmers")
    fig, ax = plt.subplots(figsize=(8, 5))
    df['gender'].value_counts().plot(kind='pie', autopct='%1.1f%%', colors=['lightblue', 'lightcoral'], ax=ax)
    ax.set_title('Gender Distribution of Farmers')
    ax.set_ylabel('')
    ax.axis('equal')
    plt.tight_layout()
    st.pyplot(fig)

    # Age Distribution
    st.header("Distribution of Age among Farmers")
    fig, ax = plt.subplots(figsize=(10, 6))
    ax.hist(df['age'], bins=10, color='orange', edgecolor='black')
    ax.set_title('Distribution of Age among Farmers')
    ax.set_xlabel('Age')
    ax.set_ylabel('Number of Farmers')
    ax.grid(axis='y', alpha=0.75)
    plt.tight_layout()
    st.pyplot(fig)

    # Season Distribution
    st.header("Distribution of Seasons for Farming")
    fig, ax = plt.subplots(figsize=(8, 5))
    df['season'].value_counts().plot(kind='bar', color='lightcoral', ax=ax)
    ax.set_title('Distribution of Seasons for Farming')
    ax.set_xlabel('Season')
    ax.set_ylabel('Number of Farmers')
    plt.xticks(rotation=0)
    plt.tight_layout()
    st.pyplot(fig)

    # PIN Code Distribution
    st.header("Distribution of Farmers by PIN Code")
    fig, ax = plt.subplots(figsize=(12, 6))
    df['pincode'].value_counts().plot(kind='bar', color='lightgreen', ax=ax)
    ax.set_title('Distribution of Farmers by PIN Code')
    ax.set_xlabel('PIN Code')
    ax.set_ylabel('Number of Farmers')
    plt.xticks(rotation=45)
    plt.tight_layout()
    st.pyplot(fig)

    # Irrigation Methods Distribution
    st.header("Distribution of Irrigation Methods Used")
    fig, ax = plt.subplots(figsize=(10, 6))
    df['irrigation_method'].value_counts().plot(kind='bar', color='lightblue', ax=ax)
    ax.set_title('Distribution of Irrigation Methods Used')
    ax.set_xlabel('Irrigation Method')
    ax.set_ylabel('Number of Farmers')
    plt.xticks(rotation=45)
    plt.tight_layout()
    st.pyplot(fig)
else:
    st.write("Please upload a CSV file to proceed.")
