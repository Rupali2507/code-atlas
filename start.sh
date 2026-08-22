#!/bin/bash

echo "Starting Code Atlas..."

cleanup(){
    echo ""
    echo "Stopping Code Atlas..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit
}

trap cleanup SIGINT SIGTERM

cd backend
npm run dev & BACKEND_PID=$!

cd ..

cd frontend
npm run dev & FRONTEND_PID=$!

cd ..

echo "Backend and frontend started!"
echo "Backend PID : $BACKEND_PID"
echo "Frontend PID : $FRONTEND_PID"

wait