import { renderHook } from "@testing-library/react-hooks";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { useFetchUsers } from "./use-fetch-users";
import { users } from "mocks/users";

export const usersHandler = rest.post(
  `http://localhost:3000/api/users?page=1`,
  (req, res, ctx) => {
    const limit: number = 9;
    const totalUsers = users.length;
    const totalPages =
      totalUsers % limit === 0
        ? Math.trunc(totalUsers / limit)
        : Math.trunc(totalUsers / limit) + 1;

    return res(
      ctx.status(200),
      ctx.json({
        totalUsers,
        totalPages,
        page: 1,
        limit: users.length < limit ? users.length : limit,
        users: users,
      })
    );
  }
);

export const usersHandlerException = rest.post(
  `http://localhost:3000/api/users?page=1`,
  (req, res, ctx) => {
    return res(ctx.status(500));
  }
);

const usersHandlers = [usersHandler];

const server = setupServer(...usersHandlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("useFetchUsers", () => {
  it.skip("should return users list", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchUsers());

    await waitForNextUpdate();

    expect(result.current.users).toHaveLength(6);
  });

  it.skip("should set error to true when catch() block is executed", async () => {
    server.use(usersHandlerException);

    const { result, waitForNextUpdate } = renderHook(() => useFetchUsers());

    await waitForNextUpdate();

    expect(result.current.users).toHaveLength(0);
  });
});
