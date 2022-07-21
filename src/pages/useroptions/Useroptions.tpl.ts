export const UseroptionsTpl = `
div(class='options_container')
            div(class='row')
                div(class='flex-item_options')
                    div(class='flex-item_icon_options')
                    form.initial(action="#")
                        #{inputFirstName}
                        #{inputSecondName}
                        #{inputDisplayName}
                        #{inputLogin}
                        #{inputEmail}
                        #{inputPhone}

                        label
                            ='Choose photo:'
                        input(type="file", name="avatar", placeholder='avatar')
                        #{buttonSubmit}

                    form(action='#')
                        label
                            ='Choose new pass:'
                        #{inputOldPassword}
                        #{inputNewPassword}
                        #{buttonSubmitPass}
                div.message
                      p(class='input__errorInput')
                          =''`