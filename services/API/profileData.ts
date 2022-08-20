export let profileData = {
    "data": {
        "posts": [
            {
                "id": 1,
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, in exercitationem ipsa ratione consectetur ad tempore accusamus praesentium commodi ipsum culpa expedita quae? Iste voluptas assumenda ex ipsa illum explicabo?",
                "user_id": 1,
                "created_at": "28 July, 2022",
                "total_likes": 12,
                "is_liked": false,
                "photos": [
                    {
                        "id": 1,
                        "path": "/assets/images/post/1.jpg",
                        "post_id": 1,
                    }
                ],
                "comments": [
                    {
                        "id": 1,
                        "post_id": 1,
                        "comment_by": 12, 
                        "comment_message": "nice", 
                        "created_at": "28 July, 2022", 
                        "user": {
                            "id": 2,
                            "name": "Kathy Morgan",
                            "photo": "/assets/images/user/1.jpg"
                        }
                    },
                    {
                        "id": 2,
                        "post_id": 1,
                        "comment_by": 2, 
                        "comment_message": "Awesome", 
                        "created_at": "28 July, 2022", 
                        "user": {
                            "id": 2,
                            "name": "Bush Ahmed",
                            "photo": "/assets/images/user/2.jpg"
                        }
                    }
                ],
                "user": {
                    "id": 1,
                    "name": "Maruf Ahmed",
                    "photo": "/assets/images/user/5.jpg"
                }
            }, 
        ]
    }
}