import { DataRepositoryBootstrap } from "../../Domains/MemoData/Infra/boostrap/DataRepositoryBootstrap";

export async function bootstrapStart(): Promise<void> {
    await new DataRepositoryBootstrap().handler()
}