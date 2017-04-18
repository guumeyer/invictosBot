'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const chatbot = new Telegram.Telegram('323900533:AAFoLaOS1MlZaUBoXr6yCMJhaAbAr5VRKUI')
class EventsController extends TelegramBaseController {
    allEventsAction(scope) {
        let msg = `QConSP - 24-25-26/04/2017 - qconsp.com\nFrontInSampa - 01/07/2017 - frontinsampa.com.br`
        scope.sendMessage(msg)
    }

    get routes() {
        return {
            'allEvents': 'allEventsAction'
        }
    }
}
chatbot.router
    .when(
        new TextCommand('/allevents', 'allEvents'), new EventsController()
    )