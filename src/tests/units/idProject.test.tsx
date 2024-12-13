import { useHandleProjects } from "@/contexts/ContextProjects";
import { render, screen } from "@testing-library/react";
import IdProject from "@/app/proyectos/[id]/page";

jest.mock("@/contexts/ContextProjects", () => ({
  useHandleProjects: jest.fn(),
}));

describe("Renderizar proyectos en navProject", () => {
  it("se muestran los proyectos en nav", () => {
    (useHandleProjects as jest.Mock).mockReturnValue({
      findProject: jest.fn().mockReturnValue({
        id: 1,
        title: "app tasks",
        description: "create app with react and node",
        date_limit: "24-06-2024",
        data_semana: {},
        kanban: [],
        notes: "",
        semana: 0,
        todoList: [],
      }),
    });
    render(<IdProject params={{ id: "1" }} />);

    expect(screen.getByText("app tasks")).toBeInTheDocument();
    expect(
      screen.getByText("create app with react and node")
    ).toBeInTheDocument();
    expect(screen.getByText("Término: 24-06-2024")).toBeInTheDocument();
    expect(screen.getByText("Tabla kanban")).toBeInTheDocument();
    expect(screen.getByText("Semana")).toBeInTheDocument();
    expect(screen.getByText("Notas")).toBeInTheDocument();
    expect(screen.getByText("To-do List")).toBeInTheDocument();
  });
});
