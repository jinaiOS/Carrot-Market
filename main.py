from fastapi import FastAPI, UploadFile, Form
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from typing import Annotated
import sqlite3

con = sqlite3.connect('db.db', check_same_thread=False)
cur = con.cursor()

class Chat(BaseModel):
    id:int
    content:str

chats = []

app = FastAPI()

@app.post("/chats")
def create_chat(chat:Chat):
    chats.append(chat)
    return '채팅 전송에 성공했습니다.'

@app.get("/chats")
def read_chat():
    return chats

@app.post('/items')
async def create_time(image: UploadFile, 
                title: Annotated[str,Form()], 
                price: Annotated[int,Form()], 
                description: Annotated[str,Form()], 
                place: Annotated[str,Form()]):
    
    image_bytes = await image.read()
    cur.execute(f"""
                INSERT INTO items(title,image,price,description,place)
                VALUES ('{title}','{image_bytes.hex()}',{price},'{description}','{place}')
                """)
    return '200'

app.mount("/", StaticFiles(directory="static", html=True), name="static")