import { container } from "tsyringe";
import { Bootstrap } from "../../../../commom/bootstrap/bootstrap";
import { DataRepositoryEnum } from "../../Domain/DataRepositoryEnum";
import { DataRepositoryDb } from "../DataRepositoryDb";


export class DataRepositoryBootstrap implements Bootstrap {
    async handler(): Promise<void> {
        container.register(DataRepositoryEnum.DATA_REPOSITORY, DataRepositoryDb)
    }
}