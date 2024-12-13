import Proyectos from "@/app/proyectos/page";
import Nuevo from "@/app/nuevo/page";
import { useHandleProjects } from "@/contexts/ContextProjects";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";


jest.mock("@/contexts/ContextProjects", () => ({
  useHandleProjects: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Creación de proyectos", () => {
  it("crear nuevo proyecto", async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
    const handleProject = jest.fn();
    const handleViewCreate = jest.fn();

    (useHandleProjects as jest.Mock).mockReturnValue({
        projects: [],
      handleProject,
      handleViewCreate,
    });

    render(<Nuevo />);

    const inputTitle = screen.getByRole("textbox", {
      name: "Nombre del proyecto",
    });

    const inputDate = screen.getByPlaceholderText("11/06/2024");
    const inputDescript = screen.getByRole("textbox", { name: "Descripción" });
    const button = screen.getByText("Crear proyecto");

    await userEvent.type(inputTitle, "app react");
    await userEvent.type(inputDate, "2024-06-20");
    await userEvent.type(inputDescript, "programming");

    await waitFor(() => {
      expect(inputTitle).toHaveValue("app react");
      expect(inputDate).toHaveValue("2024-06-20");
      expect(inputDescript).toHaveValue("programming");
    });

    await userEvent.click(button);

    expect(handleProject).toHaveBeenCalledWith({
        id: 0,
        title: "app react",
        description: "programming",
        date_limit: "2024-06-20",
        data_semana: {},
        kanban: [],
        notes: "",
        semana: 0,
        todoList: [],
      });
  });
});

describe("Renderizar proyectos en pagina proyectos", () => {
  it("renderiza los proyectos con cardProject", () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
    (useHandleProjects as jest.Mock).mockReturnValue({
      projects: [
        {
          id: 0,
          title: "create react app",
          description: "programming",
          date_limit: "25-08-2024",
        },
        {
          id: 1,
          title: "create next app",
          description: "development",
          date_limit: "26-08-2024",
        },
      ],
    });
    render(<Proyectos />);

    expect(screen.getByText("create react app")).toBeInTheDocument();
    expect(screen.getByText("programming")).toBeInTheDocument();
    expect(screen.getByText("Término: 25-08-2024")).toBeInTheDocument();

    expect(screen.getByText("create next app")).toBeInTheDocument();
    expect(screen.getByText("development")).toBeInTheDocument();
    expect(screen.getByText("Término: 26-08-2024")).toBeInTheDocument();
  });

  it("se muestra boton para crear si no hay proyectos", () => {
    (useHandleProjects as jest.Mock).mockReturnValue({ projects: [] });
    render(<Proyectos />);

    expect(screen.getByText("Crea un nuevo proyecto"));
  });
});
