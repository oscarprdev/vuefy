/**
 * Card — a flexible content container with optional header, title, description, content, and footer sections.
 */
import Card from './card.vue'
import CardHeader from './card-header.vue'
import CardTitle from './card-title.vue'
import CardDescription from './card-description.vue'
import CardContent from './card-content.vue'
import CardFooter from './card-footer.vue'

Card.Header = CardHeader
Card.Title = CardTitle
Card.Description = CardDescription
Card.Content = CardContent
Card.Footer = CardFooter

export default Card
export { CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
