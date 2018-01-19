<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class IndexController extends Controller
{
    /**
     * @Route("/api/login.json", name="api_login")
     */
    public function login(Request $request)
    {
        $content = $request->getContent();
        $data = json_decode($content, true); // 2nd param to get as array
        if (empty($data['email'])) {
            return $this->_createResponse('email', 'Please enter email');
        }

        if (empty($data['password'])) {
            return $this->_createResponse('password', 'Please enter password');
        }

        return $this->_createResponse('email', 'Bad credentials');

    }

    private function _createResponse($field, $message)
    {
        return new JsonResponse([
            'error' => [
                'field' => $field,
                'message' => $message,
            ]
        ]);
    }

    /**
     * @Route("/{path}", name="index", requirements={"path"=".+"})
     * @Route("/", name="index_homepage")
     */
    public function index()
    {

        // replace this line with your own code!
        return $this->render(
            'index/index.html.twig',
            []
        );
    }
}
