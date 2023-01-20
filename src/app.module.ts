import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";

import {ConfigModule} from "@nestjs/config";
import { RolesModule } from './roles/roles.module';
import {Role} from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import {UsersModule} from './users/users.module';
import { User } from "./users/users.model";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD.toString(),
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles],
            autoLoadModels: true,
            // dialectOptions: {
            //     ssl: {
            //         require: true,
            //         rejectUnauthorized: false // <<<<<<< YOU NEED THIS
            //     }
            // },
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        // PostsModule,
        // FilesModule,
    ]
})
export class AppModule {
}
