const formsData = [
    {
        name: "username",
        title: "Username",
        type: 'text',
        settings: {
            required: '*это поле обязательна к заполнению',
            // minLength: { value: 2, message: 'минимум 2 буквы' }
        }
    },
    {
        name: "email",
        title: "Email",
        type: 'text',
        settings: {
            required: '*это поле обязательна к заполнению', 
            // pattern: {
            //     value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            //     message: 'Invalid URL'
            // }
        },

    },
    // {
    //     name: "phone_number",
    //     title: "phone number",
    //     type: 'number',
    //     settings: {
    //         pattern: {
    //             value: /^([+996]{1}[0-9]{11})?$/,
    //             message: 'Invalid numb'
    //         }
    //     }
    // },
    {
        name: "password",
        title: "password",
        type: 'password',
        settings: {
            required: '*это поле обязательна к заполнению', 
            // pattern: {
            //     value: /(?=.*[0-9])/g,
            //     message: 'должна быть хотя бы 1 цифра'
            // },
            // minLength: { value: 6, message: 'минимум 6 символов' }
        }
    },
    // {
    //     name: "avatarka",
    //     title: "avatarka",
    //     type: 'file',
    //     settings: {}
    // }
]
export default formsData