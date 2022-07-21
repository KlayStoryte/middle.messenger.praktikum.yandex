export const authTpl = `
div(class='auth_container')
            div(class='flex-item_icon_auth')
            div(class='row')
                div(class='flex-item_auth')
                    form(action="#")
                        #{inputLogin}
                        #{inputPassword}
                        a(href='#',class='forms_url') registration
                        a(href='#',class='forms_url') forgot password?
                        #{buttonSubmit}
                div.message
                    p(class='input__errorInput')
                        =''`