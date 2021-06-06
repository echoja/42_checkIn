import { client } from "@/auth";
import { Controller } from "@/type";
import { aw } from "@/util";
import { UserService } from "./user.service";

export const initController = (
  controller: Controller,
  userService: UserService
): void => {
  // controller.use("/api/user/login", (req, res, next) => {

  // });

  /**
   * LOGIN CALLBACK
   */
  controller.get(
    "/api/user/login/callback",
    aw(async (req, res) => {
      // url 쿼리에서 code가 설정되어 있어야 합니다.
      if (typeof req.query.code !== "string") {
        res.status(400).send();
        return;
      }
      const code: string = req.query.code;
      await userService.handleLoginCallback(code, res);
    })
  );

  /**
   * LOGIN: 인증되었을 경우 /submit 으로,
   * 인증이 되어 있지 않으면 로그인 링크로 이동합니다.
   */
  controller.get("/api/user/login", (req, res) => {
    console.log("# cookies");
    console.log(req.path);
    console.dir(req.cookies);

    if (req.isAuthenticated) {
      res.redirect("/submit");
      return;
    }
    const authorizationUri = client.authorizeURL({
      redirect_uri: process.env.CLIENT_CALLBACK ?? "",
      scope: "public",
    });
    res.redirect(authorizationUri);
  });

  controller.post(
    "/api/user/checkIn/:cardId",
    aw(async (req, res, next) => {
      if (!req.isAuthenticated || !req.user) {
        res.send(401);
        return;
      }

      // cardId check
      const cardId: string | undefined = req.params.cardId;
      if (typeof cardId !== "string") {
        res.status(403).send("no cardId provided");
        return;
      }

      const cardIdNum = parseInt(cardId, 10);
      if (isNaN(cardIdNum)) {
        res.status(403).send("wrong cardId");
        return;
      }

      await userService.handleCheckIn(req.user._id, cardIdNum);

      res.status(200).send(`success checkin: ${req.params.cardId}`);
    })
  );

  controller.post(
    "/api/user/checkOut",
    aw(async (req, res, next) => {
      const id = req?.user?._id
      if (typeof id !== 'number') {
        res.status(500).send("wrong user id");
        return;
      }
      await userService.handleCheckOut(id);

      res.status(200).send("success checkout");
    }),
    { shouldBeAuthenticated: true }
  );

  /**
   * status
   */
  controller.get(
    "/api/user/status",
    aw(async (req, res, next) => {
      // const message = {
      //   user: req.user,
      //   authenticated: req.isAuthenticated,
      // };
      // console.log("# status success");
      // console.dir(message);
      // todo
      res.json({
        login: "ryukim",
        card: null,
        gaepo: 19,
        seocho: 40,
        isAdmin: true,
      });
    })
  );
};
