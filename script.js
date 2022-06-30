// const BASE_URL = "https://jsonplaceholder.typicode.com/";


// let div = document.createElement('div');
// div.classList.add('loading');
// let span = document.createElement('span');
// span.textContent = "loading";
// div.append(span);
// document.body.prepend(div);

// function renderPostCards(array) {
//     let ul = document.createElement('ul');
//     ul.classList.add('list');

//     array.forEach(element => {    
//     let li = document.createElement('li');
//     li.classList.add('list_item');
//     let p = document.createElement('p');
//     p.classList.add('text');
//     let button = document.createElement('button');
//     button.classList.add('button');
//     button.textContent = 'X';
//         p.textContent = element.title;
//         li.append(p, button);
//         ul.append(li);
//     });
//     document.body.append(ul);
// }

// fetch(BASE_URL + 'posts')
//     .then(response => response.json())
//     .then(data => {
//         setTimeout(function () {
//             div.remove()
//             renderPostCards(data);
//         }, 2000);
        

//     });


    // З цього сервера мені потрібно витянути юзерів, та відобразити(створити карточку) поля нейм,
    // емейл, адреса(вулиця місто), моб.номер телефону, посилання на  вебсайт також назву компанії 
    // в якій працює юзер.Стилізувати картки.(CSS)
    // Додати кнопку при натисканні має видалитися ця карточка.
    // Як тільки я отримав інформацію з сервера записати в локал сторедж і якщо я перезапускаю сторінку 
    // ці картки мають братися з локал сторедж. А не з феча.
    
    // post put and delet методи феча 
    
    
    
//     const BASE_URL = "https://jsonplaceholder.typicode.com/";



// function renderPostCards(array) {
        
   
//         let ul = document.createElement('ul');
//         ul.classList.add('list');
//         array.forEach(element => {
//             let li = document.createElement('li');
//             li.classList.add('list_item');
//             let p = document.createElement('p');
//             p.classList.add('text');
//             let button = document.createElement('button');
//             button.classList.add('button');
//             button.textContent = 'X';
            
//             p.prepend(` Ім'я ${element.name}, емейл ${element.email}, місто ${element.address.city}, вулиця ${element.address.street}, телефон ${element.phone}, вебсайт ${element.website}, компанія ${element.company.name}`);

//             button.addEventListener('click', function () {
//                  let getActualList = JSON.parse(localStorage.getItem('taskList'));
//                  let filterList = getActualList.filter(function (item) {
//                              return item.id !== element.id;
//                  });
                
//                 localStorage.setItem('taskList', JSON.stringify(filterList));
                
//                 li.remove();
//             })
//             li.append(p, button);
//             ul.append(li);
//         });
    
//         localStorage.setItem('taskList', JSON.stringify(array));
//         document.body.append(ul);
// }

//  let lsitFromLocalStorage = JSON.parse(localStorage.getItem('taskList'));
//         console.log(lsitFromLocalStorage);   
//   if (lsitFromLocalStorage !== null) {
//       renderPostCards(lsitFromLocalStorage);
//   } else {
//         fetch(BASE_URL + 'users')
//         .then(response => response.json())
//             .then(data => {
            
//         renderPostCards(data);
//         });
//        }
  


// 17.06.2022 Асинхронні операції . Аджакс

// const BASE_URL = "https://jsonplaceholder.typicode.com/";

// fetch(BASE_URL + 'users')
//         .then(response => response.json())
//     .then(users => {
//         fetch(BASE_URL + 'albums')
//             .then(response => response.json())
//             .then(usersAlboms => {
//                 users.forEach(person => {
//            let myAlbums = usersAlboms.filter(album => album.userId === person.id);
//         // console.log(myAlbums, person);
//                   renderUserAlboms(myAlbums, person);
//             })   
//         })
//     });

// function renderUserAlboms(albums, user) {
        
//     let div = document.createElement('div');
//     div.classList.add('card');
//     let tittle = document.createElement('p');
//     tittle.classList.add('text');
//     tittle.textContent = user.name;
//     div.append(tittle);
//     albums.forEach(albom => {
//         let albomText = document.createElement('p');
//         albomText.classList.add('text_albom');
//         albomText.textContent = albom.title;
//         div.append(albomText);
//     })
    
//     document.body.append(div);
// }
    

// запит який дістане всі пости і потім для кожного поста дістане його коментарі.
//(три запита: юзерс, пости та коментарі ).
//


// const BASE_URL = "https://jsonplaceholder.typicode.com/";

// fetch(BASE_URL + 'users')
//     .then(response => response.json())
//     .then(users => {
//         fetch(BASE_URL + 'posts')
//             .then(response => response.json())
//             .then(usersPosts => {

//                   users.forEach(person => {
//                             let myPosts = usersPosts.filter(post => post.userId === person.id);
//                         //  console.log(person, myPosts);
//                             // myPosts, 
//                       renderUserAlboms(myPosts, person);
                      
//                         }) 
//                 fetch(BASE_URL + 'comments')
//                     .then(response => response.json())
//                     .then(usersPostsComments => {
                           
//                         usersPosts.forEach(fasting => {
//                             let myComments = usersPostsComments.filter(comments => comments.postId === fasting.id);
//                             // console.log(fasting, myComments);
//                             renderUserAlbomsComments(myComments, fasting);
//                         })
//                     })
//             })
//     })


//     function renderUserAlboms(albums, user) {

//         let div = document.createElement('div');
//         div.classList.add('card');
//         let tittle = document.createElement('p');
//         tittle.classList.add('text');
//         tittle.textContent = user.name;
//         div.append(tittle);
//         albums.forEach(albom => {
//             let albomText = document.createElement('p');
//             albomText.classList.add('text_albom');
//             albomText.textContent = albom.title;
//             div.append(albomText);
//         })

//         document.body.append(div);
// }

// function renderUserAlbomsComments(comments, post) {
//         let div = document.createElement('div');
//         div.classList.add('card');
//         let commentar = document.createElement('p');
//         commentar.classList.add('card_commentar');
//         commentar.textContent = post.title;
//         div.append(commentar);
//         comments.forEach(comment => {
//                     let commentarText = document.createElement('p');
//                     commentarText.classList.add('text_commentar');
//                     commentarText.textContent = comment.body;
//             div.append(commentarText);
//         })
//     document.body.append(div);
//     }

////
const BASE_URL = "https://jsonplaceholder.typicode.com/";

fetch(BASE_URL + 'users')
    .then(response => response.json())
    .then(users => {
        fetch(BASE_URL + 'posts')
            .then(response => response.json())
            .then(usersPosts => {

                  
                fetch(BASE_URL + 'comments')
                    .then(response => response.json())
                    .then(usersPostsComments => {
                            users.forEach(person => {
                            let myPosts = usersPosts.filter(post => post.userId === person.id);
                        //  console.log(myPosts, 'posts');
                                let pyPostsComments = myPosts.map(post => {
                                    let myComments = usersPostsComments.filter(comment => comment.postId === post.id);
                                    // console.log(myComments, 'коментар');
                                    // console.log(post, 'Пост');
                                    post.comments = myComments;
                                    // console.log(post, 'Пост онов');
                                    return post;
                                })
                                // console.log(pyPostsComments);
                      renderUserAlboms(myPosts, person);

                        }) 
                    })
            })
    })


    function renderUserAlboms(albums, user) {

        let div = document.createElement('div');
        div.classList.add('card');
        let tittle = document.createElement('p');
        tittle.classList.add('text');
        tittle.textContent = user.name;
        div.append(tittle);
        albums.forEach(albom => {
            let albomText = document.createElement('p');
            albomText.classList.add('text_albom');
            albomText.textContent = albom.title;
            let commentsConteiner = document.createElement('div');
            commentsConteiner.classList.add('coments_conteiner');
            // console.log(albom);
            let buttonOpenCloseComments = document.createElement('button');
            buttonOpenCloseComments.classList.add('button_open_close');
            buttonOpenCloseComments.textContent = 'Відкрити / Закрити';
            
            albom.comments.forEach(function (comment) {
                let textComment = document.createElement('p');
                textComment.classList.add('text_comment');
                textComment.textContent = comment.body;
                
                let buttonDeleteComment = document.createElement('button');
                buttonDeleteComment.classList.add('button_delete_comment');
                buttonDeleteComment.textContent = 'X';
                buttonDeleteComment.addEventListener('click', function () {
                    textComment.classList.toggle('delet');
                    buttonDeleteComment.remove();
                });
                commentsConteiner.append(textComment, buttonDeleteComment);
            }
                
            )


            buttonOpenCloseComments.addEventListener('click', function () {
                
                commentsConteiner.classList.toggle('z_index_one');
                // console.log('hii');
            });
            div.append(albomText, buttonOpenCloseComments, commentsConteiner);
        })

        document.body.append(div);
}
// Повторити усі методи масивів (мап, фор іч , редюс, фільтер).
// Повторити обєкти як їх перебирати як їх видаляти (Методи обєктів).
// Повторити івентн дом. кліки блур фокус, маус, кіпрес кідаун.
// Дом дерево.
// Http XML request і fech request.
// Проміси що це таке що вони приймають що повертають які є методи і що вони роблять.