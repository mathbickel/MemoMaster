import { container } from "tsyringe";
import { Bootstrap } from "../../bootstrap/bootstrap";
import { DatabaseConnectionPostgres } from "../Postgres/DatabaseConnectionPostgres";
import { DatabaseConnectionEnum } from "./DatabaseConnectionEnum";

export class DatabaseConnectionBootstrap implements Bootstrap {
    async handler(): Promise<void> {
        container.register(DatabaseConnectionEnum.DATABASE_CONNECTION, DatabaseConnectionPostgres)
    }
}