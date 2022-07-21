export const mainTpl = `
mixin list-item()
    div.list      
div(class='chat_container')
            div(class='col')
                div(class='flex-item_dialogue_list')
                    div(class='flex-item_main_window')
                    +list-item()
                    +list-item()
                    +list-item()
                    +list-item()
                    +list-item()
            div(class='col')
                div(class='flex-item_chat')
                    form(action='#')
                        #{inputText}
                        #{buttonSubmit}`
