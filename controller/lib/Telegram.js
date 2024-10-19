const { axiousInstance } = require("./axios")

function sendMessage(messageObj, messageText) {
    return axiousInstance.get("sendMessage", {
        chat_id: messageObj.chat.id,
        text: messageText,
    })
}

function handleMessage(messageObj) {
    const messageText = messageObj.text || "";

    if (messageText.charAt(0) === "/") {
        const command = messageText.substr(1);
        switch (command) {
            case "start":
                return sendMessage(
                    messageObj,
                    "Hi! I'm a bot. I can help you to get started"
                )
            default:
                return  sendMessage(messageObj, 'Hey hi, i don\'t know that command')
        }

    } else {
        if (messageText === 'привет') {
            return sendMessage(messageObj, 'привет, как дела?');
        }
        if (messageText === 'пока') {
            return sendMessage(messageObj, 'До свидания! Хорошего дня!');
        }
        if (messageText === 'как дела') {
            return sendMessage(messageObj, 'У меня всё отлично, спасибо! А у вас?');
        }
        if (messageText === 'что ты умеешь') {
            return sendMessage(messageObj, 'Я могу отвечать на вопросы, помогать с задачами и просто общаться!');
        }
        if (messageText === 'погода') {
            return sendMessage(messageObj, 'Извините, я не могу предоставить информацию о погоде. Я текстовый ассистент.');
        }
        if (messageText === 'спасибо') {
            return sendMessage(messageObj, 'Всегда рад помочь!');
        }
        if (messageText === 'кто ты') {
            return sendMessage(messageObj, 'Я искусственный интеллект, созданный для общения и помощи людям.');
        }
        if (messageText === 'помощь') {
            return sendMessage(messageObj, 'Чем я могу вам помочь? Задайте вопрос или опишите проблему.');
        }
        if (messageText === 'время') {
            return sendMessage(messageObj, 'Извините, я не могу показать текущее время. Я текстовый ассистент без доступа к системным часам.');
        }
        if (messageText === 'дата') {
            return sendMessage(messageObj, 'К сожалению, я не могу предоставить текущую дату. Я не имею доступа к календарю.');
        }


        return sendMessage(messageObj, messageText);
    }
}

module.exports = { handleMessage }