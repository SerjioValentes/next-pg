import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function start() {
    const PORT = process.env.PORT || 5561;
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('Title')
        .setDescription('Docs of api')
        .setVersion('1.0.0')
        .addTag('some tag')
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document)

    // app.useGlobalPipes(new ValidationPipe())

    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start()
