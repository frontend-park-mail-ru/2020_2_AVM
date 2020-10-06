package main
type Article struct {
	Id      string `json:"Id"`
	Title string `json:"Title"`
	Desc string `json:"desc"`
	Content string `json:"content"`
	Author string `json:"author"`
}

type Profile struct {
	Id string `json:"id"`
	Login string `json:"login"`
	Email string `json:"email"`
	Password string `json:"password"`
}

type Login struct {
	Login string `json:"login"`
	Password string `json:"password"`
}

type (
	Handler struct {
		Articles []Article
		Profiles []Profile
		logInIds map[string]string
	}
)
func NewHandler() (*Handler) {
	return &Handler{nil, nil, map[string]string{}}
}

const (
	// Key (Should come from somewhere else).
	Key = "secret"
)
