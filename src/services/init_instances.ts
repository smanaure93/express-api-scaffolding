import CocktailService from "./cocktail.service";
import CookieService from "./cookie.service";
import UserInteractionService from "./user_interaction.service";
import ConsumerService from "./consumer.service";

// GraphQL Services
export const consumerService: ConsumerService = new ConsumerService();

export const cocktailService: CocktailService = new CocktailService();
export const cookieService: CookieService = new CookieService();
export const userInteractionService: UserInteractionService = new UserInteractionService(consumerService);