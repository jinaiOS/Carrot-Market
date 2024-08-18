from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

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

app.mount("/", StaticFiles(directory="static", html=True), name="static")