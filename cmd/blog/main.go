package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql" //Импортируем для возможности подключения к MySQL
	"github.com/gorilla/mux"
	"github.com/jmoiron/sqlx"
)

const (
	port         = ":2020"
	dbDriverName = "mysql"
)

func main() {
	db, err := openDB() //открываем соединение к базе данных в самом начале
	if err != nil {
		log.Fatal(err)
	}

	dbx := sqlx.NewDb(db, dbDriverName) //расширяем стандартный клиент к базе

	mux := mux.NewRouter()
	mux.HandleFunc("/home", index(dbx)) //если url будет /home, то он вызывает функцию index

	// Указывем orderID поста в URL для перехода на конкретный пост
	mux.HandleFunc("/post/{postID}", post(dbx))

	mux.HandleFunc("/admin", admin(dbx))
	
	// Реализуем отдачу js
	mux.PathPrefix("/js/").Handler(http.StripPrefix("/js/", http.FileServer(http.Dir("./js"))))

	// Реализуем отдачу статики
	mux.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))

	fmt.Println("Start server " + port) //сообщаем о работе сервера
	err = http.ListenAndServe(port, mux)
	if err != nil {
		log.Fatal(err) //сообщаем о ошибке
	}
}

func openDB() (*sql.DB, error) {
	//Здесь прописываем соединение к базе данных
	return sql.Open(dbDriverName, "root:Dd21271969@tcp(localhost:3306)/blog?charset=utf8mb4&collation=utf8mb4_unicode_ci&parseTime=true")
}