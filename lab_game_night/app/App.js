import { router } from './router-config.js';
import { HomeController } from './controllers/HomeController.js';
import { PlayersController } from "./controllers/PlayersController.js";
const USE_ROUTER = false

class App {

  playersController = new PlayersController()

  HomeController = new HomeController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }

}

const app = new App()
// @ts-ignore
window.app = app
