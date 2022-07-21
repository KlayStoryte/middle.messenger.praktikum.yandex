export const RegisterTpl = `      
div(class='register_container')
                div(class='row')
                    div(class='flex-item_register')
                        div(class='flex-item_icon_registration')
                        form(action="#")
                            #{inputFirstName}
                            #{inputSecondName}
                            #{inputLogin}
                            #{inputEmail}
                            #{inputPassword}
                            #{inputPhone}

                            a(href='#',class='forms_url') Enter?
                            a(href='#',class='forms_url') forgot password?
                            br


                            #{buttonSubmit}
                    div.message
                      p(class='input__errorInput')
                          =''`