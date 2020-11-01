# Lunnar Games Ecommerce

<br>

<p> 
Projeto MEARN (Mongo, Express, React e Node) para construação de e-commerce completo junto com o gerenciamento de pedidos.
</p>

## <img src="print/home.png" alt="home site"/>

## Funcionalidades

- Carrinho totalmente funcional
- Reviews de produtos e avaliação
- Principais produtos no carrosel
- Páginação de produtos
- Busca de produto
- Perfil de usuário com pedidos
- Admin product management
- Admin user management
- Admin Order details page
- Opção de marcar pedidos como entregue
- Processo de finalização de pedido (shipping, payment method, etc)
- PayPal / integração cartão de crédito
- Database seeder (products & users)

## Env Variables

Create a .env file in then root and add the following

´NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id´

## Install Dependencies (frontend & backend)

npm install
cd frontend
npm install
Run

# Run frontend (:3000) & backend (:5000)

npm run dev

# Run backend only

npm run server
Build & Deploy

# Create frontend prod build

cd frontend
npm run build
There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

## Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

# Importar dados

npm run data:import

# Destruir dados

npm run data:destroy
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
