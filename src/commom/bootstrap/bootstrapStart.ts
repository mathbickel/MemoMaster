import { DataRepositoryBootstrap } from "../../Domains/MemoData/Infra/boostrap/DataRepositoryBootstrap";
import { DatabaseConnectionBootstrap } from "../db/bootstrap/DatabaseConnectionBootstrap";

export async function bootstrapStart(): Promise<void> {
    await new DataRepositoryBootstrap().handler()
    await new DatabaseConnectionBootstrap().handler()
}